import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-list/recipe-detail/recipe-detail.component';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGaurd } from './auth/auth-gaurd.service';

const routes: Routes = [ 
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeDefaultComponent},
        {path: 'new', component: RecipeEditComponent, canActivate:[AuthGaurd]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate:[AuthGaurd]}
    ]}, 
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent}
    //{ path: 'not-found', component: ErrorPageComponent, data:{message: 'Page not found!'} },
    //{ path: '**', redirectTo:'/not-found'} //must be last because routs are looked at in order
  ];

@NgModule({
	imports: [
		RouterModule.forRoot(routes) 
    //RouterModule.forRoot(appRoutes, {useHash: true})
	],
	exports: [RouterModule]
})
export class AppRoutingModule{}