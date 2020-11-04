import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealentryService } from './mealEntryService/mealentry.service'
import { from } from 'rxjs';
import { MealentryformComponent } from './mealEntryForm/mealentryform/mealentryform.component';

@NgModule({
  declarations: [
    AppComponent,
    MealentryformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MealentryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
