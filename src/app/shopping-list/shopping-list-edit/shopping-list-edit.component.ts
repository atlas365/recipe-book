import { Component, 
          OnInit, 
          OnDestroy, 
          ElementRef, 
          EventEmitter,
          ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';   

import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  editMode = false;
  editedItemIndex:number;
  editedItem:Ingredient;

  addEditButton:string = 'Add';

  @ViewChild('f') slForm: NgForm; 

  constructor(private shoppingListService:ShoppingListService) { }

  subscription:Subscription;

  ngOnInit() {
   this.subscription = this.shoppingListService
     .statedEditing
       .subscribe((index: number) => {
         this.editMode = true;
         this.editedItemIndex = index;
         this.editedItem = this.shoppingListService.getIngredient(index);
         this.slForm.setValue({
           name: this.editedItem.name,
           amount: this.editedItem.amount
         })
       }
    );
  }

  onAddItem(form: NgForm) {
  	
    const value = form.value;
  	const ingredient = new Ingredient(value.name, value.amount);
    
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
  	  this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.removeIngredient(this.editedItemIndex)
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
