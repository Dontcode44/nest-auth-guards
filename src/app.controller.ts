import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guards';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('Login with credentials')
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @ApiTags('Protected test')
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() requ): string {
    return requ.user;
  }
}
