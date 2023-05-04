import { GroceriesCategory } from './groceries-category.enum';

export interface Groceries {
  name: string;
  quantity: number;
  category: GroceriesCategory;
}
