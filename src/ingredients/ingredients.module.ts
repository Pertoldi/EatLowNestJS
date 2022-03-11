import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnergyCostEntity } from 'src/entities/energyCost.entity';
import { IngredientEntity } from 'src/entities/ingredients.entity';
import { SubGroupEntity } from 'src/entities/subGroup.entity';

import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubGroupEntity, IngredientEntity, EnergyCostEntity])],
  controllers: [IngredientsController],
  providers: [IngredientsService]
})
export class IngredientsModule {}
