import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guard';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto';
import LoginApiSchema from 'src/common/apiSchema/loginApi.schema';
import RegisterApiSchema from 'src/common/apiSchema/registerApi.schema';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @ApiBody(RegisterApiSchema)
  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.createUser(dto);
  }

  @ApiBody(LoginApiSchema)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('refreshToken')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }
}
