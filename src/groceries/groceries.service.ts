import { Injectable } from '@nestjs/common';
import { Groceries } from './groceries.model';
import { GroceriesCategory } from './groceries-category.enum';

@Injectable()
export class GroceriesService {
  groceries: Groceries[] = [
    {
      name: 'apple',
      quantity: 3,
      category: GroceriesCategory.PRODUCE,
    },
    {
      name: 'milk',
      quantity: 1,
      category: GroceriesCategory.DAIRY,
    },
    {
      name: 'chicken wing',
      quantity: 12,
      category: GroceriesCategory.MEAT,
    },
    {
      name: 'bread',
      quantity: 1,
      category: GroceriesCategory.BAKED_GOODS,
    },
    {
      name: 'chips',
      quantity: 2,
      category: GroceriesCategory.SNACKS,
    },
  ];

  getAllGroceries(): Groceries[] {
    return this.groceries;
  }
}
