import { TestBed } from '@angular/core/testing';

import { RegionesApiService } from './regiones-api.service';

describe('RegionesApiService', () => {
  let service: RegionesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
