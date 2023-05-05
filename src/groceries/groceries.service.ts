import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Groceries } from './groceries.model';
import { GroceriesCategory } from './groceries-category.enum';
import { CreateGroceriesDto } from './dto/create-groceries.dto';
import { v4 as randomID } from 'uuid';

@Injectable()
export class GroceriesService {
  groceries: Groceries[] = [];

  getAllGroceries(): Groceries[] {
    return this.groceries;
  }

  createNewGrocery(createGroceriesDto: CreateGroceriesDto): Groceries {
    const { name, category } = createGroceriesDto;
    const quantity = Number(createGroceriesDto.quantity);
    if (
      !Object.values(GroceriesCategory).includes(GroceriesCategory[category])
    ) {
      throw new BadRequestException("That's not a valid category!");
    }
    const grocery = {
      id: randomID(),
      name,
      quantity,
      category,
    };
    this.groceries.push(grocery);
    return grocery;
  }

  getGrocery(id: string): Groceries {
    return this.groceries.find((grocery) => grocery.id === id);
  }

  removeGrocery(id: string): void {
    const groceryExists = this.getGrocery(id);
    if (!groceryExists) {
      throw new NotFoundException(`The grocery with ID ${id} does not exist.`);
    }
    this.groceries = this.groceries.filter((grocery) => grocery.id !== id);
  }
}
