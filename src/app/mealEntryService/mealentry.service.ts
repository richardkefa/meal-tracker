import { Injectable } from '@angular/core';
import { Meal } from '../meal'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealentryService {
meal:Meal[]=[new Meal(1,'Fries',360,'Has alot of calories')]
getMeal(){
  return this.meal
}
  constructor() { }
}
