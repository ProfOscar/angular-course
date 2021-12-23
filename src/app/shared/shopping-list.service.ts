import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { IngredientModel } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: IngredientModel[] = [];

  constructor(private dataStorageService: DataStorageService) { }

  getIngredients() {
    this.dataStorageService.sendGetRequest('shopping-list').subscribe(
      data => {
        this.ingredients = data as IngredientModel[];
      },
      error => {
        console.error(error);
      }
    )
  }

  addIngredient(ingredient: IngredientModel) {
    let ingredientFound = false;
    for (let item of this.ingredients) {
      if (item.name.toLowerCase() == ingredient.name.toLowerCase()) {
        ingredientFound = true;
        item.amount += ingredient.amount;
        break;
      }
    }
    if (!ingredientFound) this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
  }
}
