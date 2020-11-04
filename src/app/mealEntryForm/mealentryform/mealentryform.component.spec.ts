import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealentryformComponent } from './mealentryform.component';

describe('MealentryformComponent', () => {
  let component: MealentryformComponent;
  let fixture: ComponentFixture<MealentryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealentryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealentryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
