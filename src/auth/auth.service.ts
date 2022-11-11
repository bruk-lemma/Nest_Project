import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne({ email, password });
        /*  if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
          }*/
        return user ?? null;
    }

    async login(user: any) {
        const payload = { email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
