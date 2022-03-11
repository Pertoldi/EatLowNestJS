import { Controller, Get, Param } from '@nestjs/common';

import { IngredientsService } from './ingredients.service';

@Controller('api/public/ingredients/')
export class IngredientsController {
	constructor(private readonly ingredientsService: IngredientsService) { }

	@Get()
	getAllIngredients() {
		return this.ingredientsService.getAllIngredients();
	}

	@Get(':id')
	getOneIngredientById(@Param('id') id: number) {
		return this.ingredientsService.getOneIngredientById(id);
	}

	@Get('/search/:name')
	getIngredientsByName(@Param('name') name: string) {
		return this.ingredientsService.getIngredientsByName(name);
	}
}
