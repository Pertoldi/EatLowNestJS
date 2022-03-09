import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MealEntity } from './entities/meal.entity';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([MealEntity])],
  providers: [MealsService],
  controllers: [MealsController]
})
export class MealsModule { }
