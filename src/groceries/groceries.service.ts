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
import { GroceriesIdDto } from './dto/groceries-id.dto';

@Injectable()
export class GroceriesService {
  groceries: Groceries[] = [];

  constructor(private groceriesEntityRepository: GroceriesRepository) {}

  async getAllGroceries(): Promise<Groceries[]> {
    return this.groceriesEntityRepository.getAllGroceriesFromDb();
  }

  async createNewGrocery(
    createGroceriesDto: CreateGroceriesDto,
  ): Promise<Groceries> {
    return this.groceriesEntityRepository.saveGroceryToDb(createGroceriesDto);
  }

  async getGrocery(groceriesIdDto: GroceriesIdDto): Promise<Groceries> {
    const { id } = groceriesIdDto;
    const targetGrocery = await this.groceriesEntityRepository.findGroceryInDb(
      id,
    );
    if (targetGrocery) {
      return targetGrocery;
    }
    throw new NotFoundException(`The grocery with ID ${id} does not exist.`);
  }

  async removeGrocery(groceriesIdDto: GroceriesIdDto): Promise<void> {
    const { id } = groceriesIdDto;
    const deletedGrocery =
      await this.groceriesEntityRepository.deleteGroceryFromDb(id);
    if (!deletedGrocery) {
      throw new NotFoundException(`The grocery with ID ${id} does not exist.`);
    }
  }

  async updateGrocery(
    groceriesIdDto: GroceriesIdDto,
    updateDto: UpdateDto,
  ): Promise<Groceries> {
    const targetGrocery = await this.getGrocery(groceriesIdDto);
    if (updateDto instanceof UpdateGroceryNameDto) {
      targetGrocery.name = updateDto.name;
    } else if (updateDto instanceof UpdateGroceryQuantityDto) {
      targetGrocery.quantity = updateDto.quantity;
    } else if (updateDto instanceof UpdateGroceryCategoryDto) {
      targetGrocery.category = updateDto.category;
    }
    await this.groceriesEntityRepository.updateGroceryInDb(targetGrocery);
    return targetGrocery;
  }
}
