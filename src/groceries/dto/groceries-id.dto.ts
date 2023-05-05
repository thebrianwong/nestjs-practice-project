import { IsNotEmpty, IsUUID } from 'class-validator';

export class GroceriesIdDto {
  @IsUUID('all')
  @IsNotEmpty()
  id: string;
}
