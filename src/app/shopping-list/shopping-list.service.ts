import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
	//ingredientsChanged = new EventEmitter<Ingredient[]>();
	
  statedEditing = new Subject<number>();

	ingredients: Ingredient[] = [];
	
  	constructor() { 
  		this.ingredients.push(new Ingredient("Peanut Butter", 1));
  		this.ingredients.push(new Ingredient("Jelly", 1));
  		this.ingredients.push(new Ingredient("Bread", 2));
  	}

  	getIngredients(){
  		return this.ingredients.slice();
  	}

  	addIngredient(ingredient:Ingredient){
  		this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  		//this.ingredientsChanged.emit(this.ingredients.slice());
  	}

  	addIngredients(ingredients:Ingredient[]){
  		this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
  	//	this.ingredientsChanged.emit(this.ingredients.slice());
  	}

    getIngredient(index:number) {
      return this.ingredients[index];
    }

    updateIngredient(index:number, newIngredient:Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index:number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}