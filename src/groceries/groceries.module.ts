import { Module } from '@nestjs/common';
import { GroceriesController } from './groceries.controller';
import { GroceriesService } from './groceries.service';

@Module({
  imports: [],
  controllers: [GroceriesController],
  providers: [GroceriesService],
})
export class GroceriesModule {}
