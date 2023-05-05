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
import {
  UpdateGroceryCategoryDto,
  UpdateGroceryNameDto,
  UpdateGroceryQuantityDto,
} from './dto/update-groceries.dto';

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
    @Body() updateGroceryNameDto: UpdateGroceryNameDto,
  ): Groceries {
    return this.groceriesService.updateGrocery(id, updateGroceryNameDto);
  }

  @Patch('/:id/quantity')
  updateGroceryQuantity(
    @Param('id') id: string,
    @Body() updateGroceryQuantityDto: UpdateGroceryQuantityDto,
  ): Groceries {
    return this.groceriesService.updateGrocery(id, updateGroceryQuantityDto);
  }

  @Patch('/:id/category')
  updateGroceryCategory(
    @Param('id') id: string,
    @Body() updateGroceryCategoryDto: UpdateGroceryCategoryDto,
  ): Groceries {
    return this.groceriesService.updateGrocery(id, updateGroceryCategoryDto);
  }
}
