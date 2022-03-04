import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService,private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @Post('auth/test')
  async findEmail(@Body() req) {
    console.log(req)
    return this.usersService.findByEmail(req.email)
  }
  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Post('auth/register')
  async Register(@Body() user) {
    return this.authService.Register(user.firstName,user.lastName,user.email,user.password);
  }
}