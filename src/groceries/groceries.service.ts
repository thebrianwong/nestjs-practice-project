import { Injectable, NotFoundException } from '@nestjs/common';
import { Groceries } from './groceries.model';
import { CreateGroceriesDto } from './dto/create-groceries.dto';
import { v4 as randomID } from 'uuid';
import {
  UpdateDto,
  UpdateGroceryCategoryDto,
  UpdateGroceryNameDto,
  UpdateGroceryQuantityDto,
} from './dto/update-groceries.dto';

@Injectable()
export class GroceriesService {
  groceries: Groceries[] = [];

  getAllGroceries(): Groceries[] {
    return this.groceries;
  }

  createNewGrocery(createGroceriesDto: CreateGroceriesDto): Groceries {
    const { name, quantity, category } = createGroceriesDto;
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
    const targetGrocery = this.groceries.find((grocery) => grocery.id === id);
    if (targetGrocery) {
      return targetGrocery;
    }
    throw new NotFoundException(`The grocery with ID ${id} does not exist.`);
  }

  removeGrocery(id: string): void {
    const groceryExists = this.getGrocery(id);
    this.groceries = this.groceries.filter((grocery) => grocery.id !== id);
  }

  updateGrocery(id: string, updateDto: UpdateDto): Groceries {
    const targetGrocery = this.getGrocery(id);
    if (updateDto instanceof UpdateGroceryNameDto) {
      targetGrocery.name = updateDto.name;
    } else if (updateDto instanceof UpdateGroceryQuantityDto) {
      targetGrocery.quantity = updateDto.quantity;
    } else if (updateDto instanceof UpdateGroceryCategoryDto) {
      targetGrocery.category = updateDto.category;
    }
    return targetGrocery;
  }
}
