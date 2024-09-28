import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { UserResponse } from 'src/user/dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload = {
      username: user.email,
      sub: {
        name: user.name,
      },
    };

    const generateAccessToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: process.env.EXPIRES_TOKEN_IN,
    });

    const generateRefreshToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_REFRESH_TOKEN_KEY,
      expiresIn: process.env.EXPIRES_REFRESH_TOKEN_IN,
    });

    return {
      user,
      access_token: generateAccessToken,
      refesh_token: generateRefreshToken,
    };
  }

  async validateUser(dto: LoginDto): Promise<UserResponse> {
    const user = await this.userService.findByEmail(dto.email);
    if (!user) throw new NotFoundException('User not found');
    const isPasswordCorrect = await compare(dto.password, user.password);
    if (!isPasswordCorrect) throw new UnauthorizedException();
    const { password, ...result } = user;
    return result;
  }
}
