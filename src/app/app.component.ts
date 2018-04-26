import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
	loadedFeature:string = 'recipe';

  title = 'app';

  onNavigate(feature:string){
  	this.loadedFeature=feature;

  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDLWsLFlL9GPNKaLlUZ8_yKotpjRpT7dB4",
      authDomain: "ng-recipe-project-e6811.firebaseapp.com"
    });
  }
}
