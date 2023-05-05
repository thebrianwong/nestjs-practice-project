import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    console.log(id);
    return this.groceriesService.getGrocery(id);
  }

  @Delete('/:id')
  removeGrocery(@Param('id') id: string): void {
    return this.groceriesService.removeGrocery(id);
  }
}
