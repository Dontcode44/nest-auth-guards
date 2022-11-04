import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SuperSecret',
    });
  }

  /**
   * It takes a payload, which is the decoded JWT, and returns an object with the user's id and
   * username
   * @param {any} payload - The JWT payload.
   * @returns The user's id and username.
   */
  async validate(payload: any) {
    return {
      id: payload.sub,
      username: payload.username,
    };
  }
}
