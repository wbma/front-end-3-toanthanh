import { TestBed, inject } from '@angular/core/testing';

import { DigitransitItService } from './digitransit-it.service';

describe('DigitransitItService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitransitItService]
    });
  });

  it('should be created', inject([DigitransitItService], (service: DigitransitItService) => {
    expect(service).toBeTruthy();
  }));
});
