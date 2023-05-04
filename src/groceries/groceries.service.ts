import { Injectable } from '@nestjs/common';

@Injectable()
export class GroceriesService {
  getAllGroceries(): string[] {
    return ['apples', 'bananas'];
  }
}
