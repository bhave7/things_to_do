import { TestBed } from '@angular/core/testing';

import { ResponseToModelService } from './response-to-model.service';

describe('ResponseToModelService', () => {
  let service: ResponseToModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseToModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
