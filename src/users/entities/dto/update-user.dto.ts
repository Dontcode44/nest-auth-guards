import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password?: string;
}
