import { TestBed } from '@angular/core/testing';

import { FoodDisplayService } from './food-display.service';

describe('FoodDisplayService', () => {
  let service: FoodDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
