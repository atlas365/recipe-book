import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RecipeService {

	recipes: Recipe[] = [];

	recipedChanged = new Subject<Recipe[]>();

	constructor(private http: Http, private auth:AuthService) {}

  	getRecipes() {
  		//returns a new copy of recipes
  		return this.recipes.slice();
  	}

  	getRecipe(id:number) {
  		return this.recipes[id];
  	}

  	pushRecipe(recipe:Recipe) {
  		this.recipes.push(recipe);
  		this.recipedChanged.next(this.recipes.slice());
  	}

  	updateRecipe(newRecipe:Recipe, index:number) {
  		this.recipes[index] = newRecipe;
  		this.recipedChanged.next(this.recipes.slice());
  	}

  	deleteRecipe(index:number) {
  		this.recipes.splice(index, 1);
  		this.recipedChanged.next(this.recipes.slice());
	}
	  
	updateRecipes() {
		console.log('save');
		return this.http.put('https://ng-recipe-project-e6811.firebaseio.com/recipe.json', this.recipes);
	}

	retrieveRecipes() {

		const token = this.auth.getToken();

		this.http.get('https://ng-recipe-project-e6811.firebaseio.com/recipe.json?auth=' + token)
			.map((response: Response) => {
				const recipes: Recipe[] = response.json();
				for(let recipe of recipes) {
					if(!recipe['ingredients']){
						recipe['ingredients'] = [];
					}
				}
				return recipes;
			})
			.subscribe((recipes: Recipe[])=>{
				this.recipes = recipes;
				this.recipedChanged.next(this.recipes.slice());
				return recipes;
			});
			
	}
	
}