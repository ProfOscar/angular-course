import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipesFetched = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesFetched.emit(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
