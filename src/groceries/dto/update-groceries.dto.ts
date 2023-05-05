import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateGroceryNameDto {
  @IsNotEmpty()
  name: string;
}

export class UpdateGroceryQuantityDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
