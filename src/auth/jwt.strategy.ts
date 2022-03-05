import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return {
       id: payload.sub,
       email: payload.email ,
       firstName: payload.firstName, 
       lastName:payload.lastName ,
       avatarUrl:payload.avatarUrl ,
       isActive: payload.isActive, 
       isAdmin:payload.isAdmin , 
       isCompany:payload.isCompany 
      };
  }
}