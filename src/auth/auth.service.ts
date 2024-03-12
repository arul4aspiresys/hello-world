import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/auth-signin.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
    ){}
    async signIn(signInDto: SignInDto): Promise<{access_token: string}> {
        const user = await this.userService.findOneByEmail(signInDto.email);
        if(user?.password !== signInDto.password) {
            throw new UnauthorizedException();
        }
        const payload = {
            sub: user.id,
            username: user.firstname + ' ' + user.lastname,
        };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
