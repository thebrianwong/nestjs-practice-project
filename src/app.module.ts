import { Module } from '@nestjs/common';
import { GroceriesModule } from './groceries/groceries.module';

@Module({
  imports: [GroceriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
