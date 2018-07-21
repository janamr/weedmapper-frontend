import { TestBed, inject } from '@angular/core/testing';

import { PlantPinService } from './plant-pin.service';

describe('PlantPinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantPinService]
    });
  });

  it('should be created', inject([PlantPinService], (service: PlantPinService) => {
    expect(service).toBeTruthy();
  }));
});
