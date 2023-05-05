import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { GroceriesCategory } from '../groceries-category.enum';
import { Transform } from 'class-transformer';

export class CreateGroceriesDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value);
  })
  quantity: number;

  @IsNotEmpty()
  @IsEnum(GroceriesCategory)
  category: GroceriesCategory;
}
