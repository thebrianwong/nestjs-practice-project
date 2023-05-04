import { Controller, Get } from '@nestjs/common';
import { GroceriesService } from './groceries.service';
import { Groceries } from './groceries.model';

@Controller('groceries')
export class GroceriesController {
  constructor(private readonly groceriesService: GroceriesService) {}

  @Get()
  getAllGroceries(): Groceries[] {
    return this.groceriesService.getAllGroceries();
  }
}
