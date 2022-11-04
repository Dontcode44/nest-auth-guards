import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './entities/dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll() {
    return await this.usersService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.getOne(id);
  }

  @Post('register')
  async createUser(@Body() newUser: CreateUserDto) {
    const toCreate = await this.usersService.createUser(newUser);

    return toCreate;
  }
}
