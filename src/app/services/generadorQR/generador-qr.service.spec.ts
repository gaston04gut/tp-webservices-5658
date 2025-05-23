import { TestBed } from '@angular/core/testing';

import { GeneradorQRService } from './generador-qr.service';

describe('GeneradorQRService', () => {
  let service: GeneradorQRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorQRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
