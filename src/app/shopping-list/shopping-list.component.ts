import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel("Pasta", 500),
    new IngredientModel("Pomodoro", 2)
  ]

  constructor() { }

  ngOnInit(): void { }

  onIngredientAdded(newIngredient: IngredientModel) {
    let ingredientFound = false;
    // for (let item of this.ingredients) {
    //   if (item.name.toLowerCase() == newIngredient.name.toLowerCase()) {
    //     ingredientFound = true;
    //     item.amount += newIngredient.amount;
    //     break;
    //   }
    // }
    let index: number = 0;
    while (index < this.ingredients.length && !ingredientFound) {
      let item: IngredientModel = this.ingredients[index++];
      if (item.name.toLowerCase() == newIngredient.name.toLowerCase()) {
        ingredientFound = true;
        item.amount += newIngredient.amount;
      }
    }
    if (!ingredientFound) {
      this.ingredients.push(newIngredient);
    }
  }

}
