import { GroceriesCategory } from './groceries-category.enum';

export interface Groceries {
  id: string;
  name: string;
  quantity: number;
  category: GroceriesCategory;
}
