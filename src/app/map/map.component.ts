import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { PlantPinSubmission, PlantPin, PlantPinService } from '../api/plant-pin.service';

import { AgmCoreModule } from '@agm/core';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  allPins: Array<PlantPin> = [];
  commentIcon: string;
  favoriteIcon: string;

  zoom: number = 8;
  // initial center position - change to include all pins?
  // switch to user search location

  clickPin: { lat: number, lng: number};

  constructor(
    public plantPinServ: PlantPinService,
    public myRouterServ: Router,
    public myAuthServ: AuthService
  ) {
    this.commentIcon = "assets/images/comment.png";
    this.favoriteIcon = "assets/images/heart.png";
  }

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

  newPin(location) {
    // console.log(location, location.constructor.name);
    const { lat, lng } = location.coords;
    this.plantPinServ.latitude = lat;
    this.plantPinServ.longitude = lng;
    this.clickPin = { lat, lng };
  }

  openComments(id) {
    // this.plantPinServ.refreshCommentsArray();
    this.plantPinServ.savePinId(id);
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



