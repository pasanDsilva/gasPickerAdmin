import { TestBed, inject } from '@angular/core/testing';

import { NewaccService } from './newacc.service';

describe('NewaccService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewaccService]
    });
  });

  it('should be created', inject([NewaccService], (service: NewaccService) => {
    expect(service).toBeTruthy();
  }));
});
