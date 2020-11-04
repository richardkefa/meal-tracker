import { Component } from '@angular/core';
import { Meal } from './meal'
import { MealentryService } from './mealEntryService/mealentry.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mealentrys:any[];
  constructor( mealentrys:MealentryService){
   this.mealentrys= mealentrys.getMeal()
  }
}
