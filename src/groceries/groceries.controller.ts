import { Controller, Get } from '@nestjs/common';
import { GroceriesService } from './groceries.service';

@Controller('groceries')
export class GroceriesController {
  constructor(private readonly groceriesService: GroceriesService) {}

  @Get()
  getAllGroceries(): string[] {
    return this.groceriesService.getAllGroceries();
  }
}
