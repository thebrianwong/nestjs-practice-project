import { Module } from '@nestjs/common';
import { GroceriesController } from './groceries.controller';
import { GroceriesService } from './groceries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groceries } from './groceries.entity';
import { GroceriesRepository } from './groceries.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Groceries])],
  controllers: [GroceriesController],
  providers: [GroceriesService, GroceriesRepository],
})
export class GroceriesModule {}
