import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurFaceComponent } from './blur-face.component';

describe('BlurFaceComponent', () => {
  let component: BlurFaceComponent;
  let fixture: ComponentFixture<BlurFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlurFaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
