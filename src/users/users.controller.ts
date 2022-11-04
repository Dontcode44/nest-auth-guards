import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './entities/dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { UpdateUserDto } from './entities/dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiBearerAuth()
  @ApiTags('Users protected')
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return await this.usersService.getAll();
  }

  @ApiBearerAuth()
  @ApiTags('Users protected')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.getOne(+id);
  }

  @ApiBearerAuth()
  @ApiTags('Register user')
  @Post('register')
  async createUser(@Body() newUser: CreateUserDto) {
    const toCreate = await this.usersService.createUser(newUser);

    return toCreate;
  }

  @ApiBearerAuth()
  @ApiTags('Users protected')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.deleteUser(+id);
  }

  @ApiBearerAuth()
  @ApiTags('Users protected')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    return await this.usersService.updateUser(+id, user);
  }
}
