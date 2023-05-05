import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GroceriesService } from './groceries.service';
import { Groceries } from './groceries.model';
import { CreateGroceriesDto } from './dto/create-groceries.dto';

@Controller('groceries')
export class GroceriesController {
  constructor(private readonly groceriesService: GroceriesService) {}

  @Get()
  getAllGroceries(): Groceries[] {
    return this.groceriesService.getAllGroceries();
  }

  @Post('/new')
  createNewGrocery(@Body() createGroceriesDto: CreateGroceriesDto): Groceries {
    return this.groceriesService.createNewGrocery(createGroceriesDto);
  }

  @Get('/:id')
  getGrocery(@Param('id') id: string): Groceries {
    return this.groceriesService.getGrocery(id);
  }

  @Delete('/:id')
  removeGrocery(@Param('id') id: string): void {
    return this.groceriesService.removeGrocery(id);
  }

  @Patch('/:id/name')
  updateGroceryName(
    @Param('id') id: string,
    @Body('name') newName: string,
  ): Groceries {
    return this.groceriesService.updateGroceryName(id, newName);
  }

  @Patch('/:id/quantity')
  updateGroceryQuantity(
    @Param('id') id: string,
    @Body('quantity') newQuantity: string,
  ): Groceries {
    return this.groceriesService.updateGroceryQuantity(id, newQuantity);
  }
}
