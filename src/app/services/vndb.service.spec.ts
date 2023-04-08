import { TestBed } from '@angular/core/testing';

import { VndbService } from './vndb.service';

describe('VndbService', () => {
  let service: VndbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VndbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
