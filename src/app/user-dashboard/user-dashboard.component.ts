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
  userFavorites: Array<PlantPin> = [];
  userComments: Array<Comment> = [];

  constructor(
    private plantPinServ: PlantPinService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.fetchUserPins();
    this.fetchUserFavorites();
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

  fetchUserFavorites() {
    this.plantPinServ.getUserFavoritesList()
    .then((response: Array<PlantPin>) => {
      // connects the DATA from the API to the COMPONENT state
      this.userFavorites = response;
      console.log(this.userFavorites);
    })
    .catch((err) => {
      alert("Sorry! Hanging up on you now.");
      console.log(err);
    });
  }


}
