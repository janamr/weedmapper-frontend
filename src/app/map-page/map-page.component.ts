import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantPinSubmission, PlantPin, PlantPinService } from '../api/plant-pin.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  allPins: Array<PlantPin> = [];

  constructor(
    private plantPinServ: PlantPinService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.fetchAllPins();
  }

  fetchAllPins() {
    this.plantPinServ.getAllPinsList()
    .then((response: Array<PlantPin>) => {
      // connects the DATA from the API to the COMPONENT state
      this.allPins = response;
    })
    .catch((err) => {
      alert("Sorry! Hanging up on you now.");
      console.log(err);
    });
  }

}
