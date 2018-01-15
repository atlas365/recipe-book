import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [];

  constructor() { 
  	this.recipes.push(
  		new Recipe("Peanut Butter And Jelly", 
  			        "PB and J Sandwich", 
  					"http://i.dailymail.co.uk/i/pix/2014/04/02/article-0-1CC5329E00000578-716_634x483.jpg"));
  }

  ngOnInit() {
  }

}
