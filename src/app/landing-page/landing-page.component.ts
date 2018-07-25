import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { PlantPinSubmission, PlantPin, PlantPinService } from '../api/plant-pin.service';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  allPins: Array<PlantPin> = [];
  @ViewChild('searchTag') searchInput: ElementRef;
  autoComp: google.maps.places.Autocomplete;
  title = 'app';

  constructor(
    private plantPinServ: PlantPinService,
    private myRouterServ: Router,
    public myAuthServ: AuthService,
    private mapsApiLoader: MapsAPILoader,
    private myRouter: Router,
    private myZone: NgZone
  ) { }

  ngOnInit() {
    this.fetchAllPins();
    this.mapsApiLoader.load().then(() => {
      this.autoComp = new google.maps.places.Autocomplete(this.searchInput.nativeElement);

      this.autoComp.addListener("place_changed", () => {
        this.myZone.run(() => {
          // app component needs to share the lat/lng of the selected place with a service
          // (the service should then share it with map component)
          this.myRouter.navigateByUrl("/map-page");
        });
      });
    });
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
