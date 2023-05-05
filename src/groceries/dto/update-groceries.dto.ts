import { IsEnum, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { GroceriesCategory } from '../groceries-category.enum';
import { Transform } from 'class-transformer';

export class UpdateGroceryNameDto {
  @IsNotEmpty()
  name: string;
}

export class UpdateGroceryQuantityDto {
  @IsNotEmpty()
  @Min(1)
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value);
  })
  quantity: number;
}

export class UpdateGroceryCategoryDto {
  @IsNotEmpty()
  @IsEnum(GroceriesCategory)
  category: GroceriesCategory;
}
