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

  async getAllGroceries(): Promise<Groceries[]> {
    return await this.groceriesEntityRepository.find({});
  }

  async createNewGrocery(
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

  async getGrocery(id: string): Promise<Groceries> {
    try {
      const targetGrocery = await this.groceriesEntityRepository.findOne({
        where: { id },
      });
      return targetGrocery;
    } catch (err) {
      console.log(`There was an error querying the database: ${err.message}`);
    }
  }

  async deleteGroceryFromDb(id: string): Promise<number> {
    try {
      const grocery = await this.groceriesEntityRepository.delete({ id });
      return grocery.affected;
    } catch (err) {
      console.log(`There was an error querying the database: ${err.message}`);
    }
  }
}
