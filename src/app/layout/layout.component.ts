import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';

import { AuthService } from '../api/auth.service';
import { PlantPinService } from '../api/plant-pin.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('searchTag') searchInput: ElementRef;
  autoComp: google.maps.places.Autocomplete;

  constructor(
    public myAuthServ: AuthService,
    public myRouterServ: Router,
    private mapsApiLoader: MapsAPILoader,
    private myRouter: Router,
    private myZone: NgZone,
    private plantPinServ: PlantPinService
  ) { }

  ngOnInit() {
    this.mapsApiLoader.load().then(() => {
      this.autoComp = new google.maps.places.Autocomplete(this.searchInput.nativeElement);

      this.autoComp.addListener("place_changed", () => {
        this.myZone.run(() => {
          const place = this.autoComp.getPlace();

          this.plantPinServ.mapLocation = place.geometry.location;
          // app component needs to share the lat/lng of the selected place with a service
          // (the service should then share it with map component)
          this.myRouter.navigateByUrl("/map-page");
        });
      });
    });
  }

  logoutClick() {
    this.myAuthServ.logout()
    .then((response) => {
      // redirect away to home page (import router service to do a redirect -- ^^ public myRouterServ)
      this.myRouterServ.navigateByUrl("/")

    .catch((err) => {
      alert("Sorry! issues with your logout")
      // redirect to index
      console.log(err);
    });
    });
  }
}

