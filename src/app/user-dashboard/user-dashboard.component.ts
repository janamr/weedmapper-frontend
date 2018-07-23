import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantPinSubmission, PlantPin, PlantPinService } from '../api/plant-pin.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userPins: Array<PlantPin> = [];

  constructor(
    private plantPinServ: PlantPinService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.fetchUserPins();
  }

  fetchUserPins() {
    this.plantPinServ.getUserPinsList()
    .then((response: Array<PlantPin>) => {
      // connects the DATA from the API to the COMPONENT state
      this.userPins = response;
    })
    .catch((err) => {
      alert("Sorry! Hanging up on you now.");
      console.log(err);
    });
  }

}
