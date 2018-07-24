import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { PlantPinSubmission, PlantPin, PlantPinService } from '../api/plant-pin.service';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  allPins: Array<PlantPin> = [];

  zoom: number = 8;
  // initial center position - change to include all pins?
  lat: number = 48.871757;
  lng: number = 2.311004;

  constructor(
    private plantPinServ: PlantPinService,
    public myRouterServ: Router
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

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
}

// var marker = new google.maps.Marker({
//   position: new google.maps.LatLng(48.8058559, 2.503856600000063),
//  title: "title",
//  map: this.map
//  });

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}



