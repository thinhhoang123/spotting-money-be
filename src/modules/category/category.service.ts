import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDtoRequest } from './dto/createCategoryRequest.dto';
import { PrismaService } from 'src/prisma.service';
import { UserService } from '../user/user.service';

@Injectable()
export class CategoryService {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
  ) {}
  async createCategory(dto: CreateCategoryDtoRequest) {
    const user = await this.userService.findById(dto.userId);
    if (!user) throw new ConflictException('Can not find user');

    for (let index = 0; index < dto.categories.length; index++) {
      await this.prisma.category.create({
        data: {
          title: dto.categories[index].title,
          userId: user.id,
        },
      });
    }
  }
}
