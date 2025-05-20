import { TestBed } from '@angular/core/testing';

import { MarcaAutoService } from './marca-auto.service';

describe('MarcaAutoService', () => {
  let service: MarcaAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcaAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
