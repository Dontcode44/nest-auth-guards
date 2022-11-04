import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './entities/dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './entities/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async getAll() {
    return await this.usersRepository.find();
  }

  async getOne(id: number) {
    const userFound = await this.usersRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      throw new Error('User not found');
    }
    return userFound;
  }

  async createUser(user: CreateUserDto) {
    const userFound = await this.usersRepository.findOne({
      where: {
        email: user.email,
      },
    });
    if (userFound) {
      throw new Error('In use');
    }
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
    const toCreate = await this.usersRepository.save(user);
    return this.usersRepository.create(toCreate);
  }

  async foundUser(user: string) {
    const userFound = await this.usersRepository.findOne({
      where: {
        username: user,
      },
    });
    
    if (userFound) {
      return userFound;
    }
    return null;
  }

  async deleteUser(id: number) {
    const userFound = await this.usersRepository.findOne({
      where: {
        id,
      },
    });
    if (!userFound) {
      throw new Error('User not found');
    }
    await this.usersRepository.delete(id);
  }

  async updateUser(id: number, user: UpdateUserDto) {
    const userFound = await this.usersRepository.findOne({
      where: {
        id,
      },
    });
    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const toUpdate = Object.assign(userFound, user);
    return await this.usersRepository.save(toUpdate);
  }
}
