import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { MealsModule } from './meals/meals.module';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';

dotenv.config();
@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'eatlow',
      entities: ["dist/**/*.entity{.ts,.js}"],//Ce sont les class TS qui vont être les images de nos tables au niveau de la DB.
      synchronize: false, //true -> update DB to match our entity
    }),
    MealsModule,
    IngredientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
