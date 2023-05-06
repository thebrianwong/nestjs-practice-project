import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Groceries } from './groceries.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroceriesDto } from './dto/create-groceries.dto';

@Injectable()
export class GroceriesRepository {
  constructor(
    @InjectRepository(Groceries)
    private readonly groceriesEntityRepository: Repository<Groceries>,
  ) {}

  async getAllGroceriesFromDb(): Promise<Groceries[]> {
    return await this.groceriesEntityRepository.find({});
  }

  async saveGroceryToDb(
    createGroceriesDto: CreateGroceriesDto,
  ): Promise<Groceries> {
    const { name, quantity, category } = createGroceriesDto;
    const grocery = this.groceriesEntityRepository.create({
      name,
      quantity,
      category,
    });
    await this.groceriesEntityRepository.save(grocery);
    return grocery;
  }

  async findGroceryInDb(id: string): Promise<Groceries> {
    return await this.groceriesEntityRepository.findOne({
      where: { id },
    });
  }

  async deleteGroceryFromDb(id: string): Promise<number> {
    const deletionResults = await this.groceriesEntityRepository.delete({ id });
    return deletionResults.affected;
  }

  async updateGroceryInDb(grocery: Groceries): Promise<void> {
    this.groceriesEntityRepository.save(grocery);
  }
}
