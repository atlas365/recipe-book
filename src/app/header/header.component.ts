import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    ngOnInit() {
    }

    constructor( private recipeService: RecipeService, private authService: AuthService ) {}

    onSaveRecipes(){
      this.recipeService.updateRecipes()
        .subscribe(
          (response) => console.log(response)
        );
    }

    onRetrieveRecipes(){
      this.recipeService.retrieveRecipes();
    }

    onLogout() {
      this.authService.logout();
    }
}
