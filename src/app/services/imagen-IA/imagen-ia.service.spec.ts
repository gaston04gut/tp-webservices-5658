import { TestBed } from '@angular/core/testing';

import { ImagenIAService } from './imagen-ia.service';

describe('ImagenIAService', () => {
  let service: ImagenIAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenIAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
