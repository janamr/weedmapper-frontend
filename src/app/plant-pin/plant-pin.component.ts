import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlantPinSubmission, PlantPin, PlantPinService } from '../api/plant-pin.service';


@Component({
  selector: 'app-plant-pin',
  templateUrl: './plant-pin.component.html',
  styleUrls: ['./plant-pin.component.css']
})
export class PlantPinComponent implements OnInit {
  userForm: PlantPinSubmission = new PlantPinSubmission();

  constructor(
    public plantPinServ: PlantPinService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
  }

  plantPinSubmit() {
    // console.log(this.userForm);
    this.userForm.latitude = this.plantPinServ.latitude;
    this.userForm.longitude = this.plantPinServ.longitude;

    this.plantPinServ.postPlantPin(this.userForm)
    .then((response: PlantPin) => {
      // redirect away to details page of the new phone
      this.userForm.latitude = null;
      this.userForm.longitude = null;
      this.myRouterServ.navigateByUrl(`/userPage`);
    })
    .catch((err) => {
      alert("Sorry! hanging up on you now...");
      console.log(err);
    });
  }
}
