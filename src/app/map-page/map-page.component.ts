import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlantPinSubmission, PlantPin, PlantPinService } from '../api/plant-pin.service';
import { MapComponent } from '../map/map.component';
import { CATCH_ERROR_VAR } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { AuthService } from '../api/auth.service';



@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  allPins: Array<PlantPin> = [];
  // favorites: Array<UserFavorites> = [];
  commentIcon: string;
  favoriteIcon: string;
  noIcon: string;
  thumbsIcon: string;


  constructor(
    public plantPinServ: PlantPinService,
    private myRouterServ: Router,
    public myAuthServ: AuthService,

  ) {
    this.commentIcon = "assets/images/comment.png";
  }

  ngOnInit() {
    this.fetchAllPins();
  }

  checkPlantArray() {
    console.log( 'IS IT EMPTY?=========' );
    console.log( this.allPins );
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

  addToFavorites( id ) {
    console.log(id);
    this.plantPinServ.postToFavorites( id )
    .then(() => {
      this.ngOnInit();
    })
    .catch((err) => {
      alert("not working...");
      console.log(err);
    });
  }

}
