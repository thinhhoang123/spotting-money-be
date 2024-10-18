import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDtoRequest } from './dto/createCategoryRequest.dto';
import { AuthGuard } from '../auth/guard';
import CreateCategoryApiSchema from 'src/common/apiSchema/createCategoriesApi.schema';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiBody(CreateCategoryApiSchema)
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('category')
  async createCategory(@Body() dto: CreateCategoryDtoRequest) {
    return await this.categoryService.createCategory(dto);
  }
}
