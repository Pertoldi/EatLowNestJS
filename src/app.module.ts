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
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],//Ce sont les class TS qui vont être les images de nos tables au niveau de la DB.
      synchronize: false, //true -> update DB to match our entity
    }),
    MealsModule,
    IngredientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
// import { Module } from '@nestjs/common';