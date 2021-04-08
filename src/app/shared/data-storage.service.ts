import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  fetchRecipes() {
    this.http.get("http://localhost:3000/recipes/") // to be completed...
  }

}
