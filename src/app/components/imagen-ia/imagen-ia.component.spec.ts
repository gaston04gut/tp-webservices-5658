import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenIAComponent } from './imagen-ia.component';

describe('ImagenIAComponent', () => {
  let component: ImagenIAComponent;
  let fixture: ComponentFixture<ImagenIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenIAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
