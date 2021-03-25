import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Carbonara',
      'Tipica pasta con pancetta ecc..',
      'https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2018/01/1517219140_f055c0757a72a3a48b267d0878cf5344e3a3f6b1-1517074283.png?w=580',
      [
        new Ingredient("Spaghetti", 500),
        new Ingredient("Pancetta", 70)
      ]
    ),
    new Recipe(
      'Amatriciana',
      'Un primo piatto della tradizione laziale...',
      'https://www.buttalapasta.it/wp-content/uploads/sites/3/2020/04/bucatini-amatriciana.jpg',
      [
        new Ingredient("Bucatini", 1000),
        new Ingredient("Pomodoro", 300)
      ]
    ),
    new Recipe(
      'Lasagne',
      'In Italia questo piatto assume diverse declinazioni...',
      'https://www.ricette.com/wp-content/uploads/2013/12/lasagne-alla-bolognese.jpg',
      [
        new Ingredient("Sfoglia di pasta", 150),
        new Ingredient("Besciamella", 120)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
