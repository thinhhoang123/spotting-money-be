import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [CategoryController],
  providers: [PrismaService, CategoryService, UserService],
})
export class CategoryModule {}
