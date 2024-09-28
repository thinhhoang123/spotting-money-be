import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserService } from './user.service';

@ApiTags('User Services')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
}
