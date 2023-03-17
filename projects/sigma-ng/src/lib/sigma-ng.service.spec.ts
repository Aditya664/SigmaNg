import { TestBed } from '@angular/core/testing';

import { SigmaNgService } from './sigma-ng.service';

describe('SigmaNgService', () => {
  let service: SigmaNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigmaNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
