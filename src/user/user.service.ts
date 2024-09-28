import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';
import { CreateUserDto, UserResponse } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUser(dto: CreateUserDto): Promise<UserResponse> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user) throw new ConflictException('Email already exists');

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 16),
      },
    });
    const { id, email, name } = newUser;
    return { id, email, name };
  }

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findById(id: number): Promise<UserResponse> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    const { password, ...result } = user;
    return result;
  }
}
