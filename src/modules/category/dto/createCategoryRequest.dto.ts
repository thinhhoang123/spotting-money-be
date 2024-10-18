import { IsArray, IsString } from 'class-validator';

export class CreateCategoryDtoRequest {
  @IsString()
  userId: string;
  @IsArray()
  categories: CategoryDtoRequest[];
}

class CategoryDtoRequest {
  @IsString()
  title: string;
}
