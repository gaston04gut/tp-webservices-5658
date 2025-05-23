import { TestBed } from '@angular/core/testing';

import { BlurFaceService } from './blur-face.service';

describe('BlurFaceService', () => {
  let service: BlurFaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlurFaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
