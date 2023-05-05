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
}
