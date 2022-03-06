import { Controller, Get, Request, Post, UseGuards, Body, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService,private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @Post('/test')
  async findEmail(@Body() req) {
    return this.usersService.findByEmail(req.email)
  }
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Post('/register')
  async Register(@Body() user) {
    return this.authService.Register(user);
  }

  @UseGuards(AuthGuard('google'))
  @Get('/google')
  async signInWithGoogle() { }

  @UseGuards(AuthGuard('google'))
  @Get('/google/redirect')
  async signInWithGoogleRedirect(@Req() req) {
      return this.authService.signInWithGoogle(req);
  }
}
