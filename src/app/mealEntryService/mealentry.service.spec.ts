import { TestBed } from '@angular/core/testing';

import { MealentryService } from './mealentry.service';

describe('MealentryService', () => {
  let service: MealentryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealentryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
