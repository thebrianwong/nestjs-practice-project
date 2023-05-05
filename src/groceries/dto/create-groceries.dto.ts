import { IsEnum, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { GroceriesCategory } from '../groceries-category.enum';
import { Transform } from 'class-transformer';

export class CreateGroceriesDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => {
    return Number(value);
  })
  quantity: number;

  @IsNotEmpty()
  @IsEnum(GroceriesCategory)
  category: GroceriesCategory;
}
