import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meal } from '../../meal'
import { from } from 'rxjs';

@Component({
  selector: 'app-mealentryform',
  templateUrl: './mealentryform.component.html',
  styleUrls: ['./mealentryform.component.css']
})
export class MealentryformComponent implements OnInit {
  newMealEntry= new Meal(0,"",0,"")
  @Output() addNewMeal=new EventEmitter<Meal>();
  submitMeal(){
    this.addNewMeal.emit(this.newMealEntry)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
