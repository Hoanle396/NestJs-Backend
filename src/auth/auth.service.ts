import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id , 
      firstName: user.firstName, 
      lastName:user.lastName, 
      isActive: user.isActive , 
      isAdmin:user.isAdmin , 
      isCompany:user.isCompany , 
      avatarUrl:user.avatarUrl
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async Register(users: any) {
    const user = await  this.usersService.Register(users);
    if (user){
      return user;
    }
    return " Register failed!";
  }
}