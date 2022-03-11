import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompoPlatIngredientEntity } from 'src/entities/compoPlatIngredient.entity';
import { EnergyCostEntity } from 'src/entities/energyCost.entity';
import { IngredientEntity } from 'src/entities/ingredients.entity';
import { SubGroupEntity } from 'src/entities/subGroup.entity';

import { MealEntity } from '../entities/meals.entity';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([MealEntity, SubGroupEntity, CompoPlatIngredientEntity, IngredientEntity, EnergyCostEntity])],
  providers: [MealsService],
  controllers: [MealsController]
})
export class MealsModule { }
