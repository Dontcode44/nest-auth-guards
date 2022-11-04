import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<Partial<User>> {
    
    const user = await this.usersService.foundUser(username);

    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      const { password, email, ...res } = user;
      return res;
    }
    return null;
  }
}
