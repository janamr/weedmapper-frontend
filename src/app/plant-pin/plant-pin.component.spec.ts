import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPinComponent } from './plant-pin.component';

describe('PlantPinComponent', () => {
  let component: PlantPinComponent;
  let fixture: ComponentFixture<PlantPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
