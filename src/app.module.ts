import { Module } from '@nestjs/common';
import { GroceriesController } from './groceries/groceries.controller';
import { GroceriesService } from './groceries/groceries.service';

@Module({
  imports: [],
  controllers: [GroceriesController],
  providers: [GroceriesService],
})
export class AppModule {}
