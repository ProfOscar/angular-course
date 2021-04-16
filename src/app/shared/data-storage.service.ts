import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  fetchRecipes() {
    this.http.get<Recipe[]>("http://localhost:3000/recipes/")
      .subscribe(recipes => {
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      });
  }

}
