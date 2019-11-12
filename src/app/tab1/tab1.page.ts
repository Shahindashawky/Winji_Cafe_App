import { RouterModule, Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [Tab1Page],
  exports: [ ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
   currentNumber = 1;

  constructor(private router:Router) {}
  logRatingChange(event) {
    console.log('Your rate:', event);
  }
   increment () {
    this.currentNumber++;
  }
  
   decrement () {
     if(this.currentNumber <= 2){
      this.currentNumber=2;
     }
    this.currentNumber--;
  }

}
