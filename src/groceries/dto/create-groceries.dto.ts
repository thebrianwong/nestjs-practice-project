import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { GroceriesCategory } from '../groceries-category.enum';

export class CreateGroceriesDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsEnum(GroceriesCategory)
  category: GroceriesCategory;
}
