import { Injectable, NotFoundException } from '@nestjs/common';
import { Groceries } from './groceries.entity';
import { CreateGroceriesDto } from './dto/create-groceries.dto';
import {
  UpdateDto,
  UpdateGroceryCategoryDto,
  UpdateGroceryNameDto,
  UpdateGroceryQuantityDto,
} from './dto/update-groceries.dto';
import { GroceriesRepository } from './groceries.repository';

@Injectable()
export class GroceriesService {
  groceries: Groceries[] = [];

  constructor(private groceriesEntityRepository: GroceriesRepository) {}

  async getAllGroceries(): Promise<Groceries[]> {
    return this.groceriesEntityRepository.getAllGroceries();
  }

  async createNewGrocery(
    createGroceriesDto: CreateGroceriesDto,
  ): Promise<Groceries> {
    return this.groceriesEntityRepository.createNewGrocery(createGroceriesDto);
  }

  async getGrocery(id: string): Promise<Groceries> {
    const targetGrocery = await this.groceriesEntityRepository.getGrocery(id);
    if (targetGrocery) {
      return targetGrocery;
    }
    throw new NotFoundException(`The grocery with ID ${id} does not exist.`);
  }

  removeGrocery(id: string): void {
    const groceryExists = this.getGrocery(id);
    this.groceries = this.groceries.filter((grocery) => grocery.id !== id);
  }

  // updateGrocery(id: string, updateDto: UpdateDto): Groceries {
  //   const targetGrocery = this.getGrocery(id);
  //   if (updateDto instanceof UpdateGroceryNameDto) {
  //     targetGrocery.name = updateDto.name;
  //   } else if (updateDto instanceof UpdateGroceryQuantityDto) {
  //     targetGrocery.quantity = updateDto.quantity;
  //   } else if (updateDto instanceof UpdateGroceryCategoryDto) {
  //     targetGrocery.category = updateDto.category;
  //   }
  //   return targetGrocery;
  // }
}
