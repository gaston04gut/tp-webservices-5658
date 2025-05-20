import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaAutoComponent } from './marca-auto.component';

describe('MarcaAutoComponent', () => {
  let component: MarcaAutoComponent;
  let fixture: ComponentFixture<MarcaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
