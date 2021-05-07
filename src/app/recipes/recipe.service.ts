import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipesFetched = new EventEmitter<Recipe[]>();

  private recipes: any[] = [
    {
      "id": 1,
      "name": "Carbonara",
      "description": "Tipica pasta con pancetta ecc..",
      "imagePath": "https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2018/01/1517219140_f055c0757a72a3a48b267d0878cf5344e3a3f6b1-1517074283.png?w=580",
      "ingredients": [
        {
          "name": "Spaghetti",
          "amount": 500
        },
        {
          "name": "Pancetta",
          "amount": 70
        }
      ]
    },
    {
      "id": 2,
      "name": "Amatriciana",
      "description": "Tipica pasta con pancetta ecc..",
      "imagePath": "https://www.buttalapasta.it/wp-content/uploads/sites/3/2020/04/bucatini-amatriciana.jpg",
      "ingredients": [
        {
          "name": "Bucatini",
          "amount": 1000
        },
        {
          "name": "Pomodoro",
          "amount": 300
        }
      ]
    },
    {
      "id": 3,
      "name": "Lasagne",
      "description": "In Italia questo piatto assume diverse declinazioni...",
      "imagePath": "https://www.ricette.com/wp-content/uploads/2013/12/lasagne-alla-bolognese.jpg",
      "ingredients": [
        {
          "name": "Sfoglia di pasta",
          "amount": 150
        },
        {
          "name": "Besciamella",
          "amount": 120
        }
      ]
    }
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesFetched.emit(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
