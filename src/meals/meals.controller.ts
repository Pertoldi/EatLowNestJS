import { Controller, Get, Param } from '@nestjs/common';

import { MealsService } from './meals.service';

@Controller('api/public/meals/')
export class MealsController {
	constructor(private readonly mealsService: MealsService) { }

	@Get()
	getAllMeal() {
		return this.mealsService.getAllMeals();
	}

	@Get(':id')
	getOneMealById(@Param('id') id: number) {
		return this.mealsService.getOneMealById(id);
	}

	@Get('/search/:name')
	getMealsByName(@Param('name') name: string) {
		return this.mealsService.getMealsByName(name);
	}

	//TODO pas très important, faire la route /ByIngredients/:id
}
