import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { GroceriesCategory } from '../groceries-category.enum';

export class UpdateGroceryNameDto {
  @IsNotEmpty()
  name: string;
}

export class UpdateGroceryQuantityDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

export class UpdateGroceryCategoryDto {
  @IsNotEmpty()
  @IsEnum(GroceriesCategory)
  category: GroceriesCategory;
}
