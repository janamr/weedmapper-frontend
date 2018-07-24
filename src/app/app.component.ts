import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';

import { AuthService } from './api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('searchTag') searchInput: ElementRef;
  autoComp: google.maps.places.Autocomplete;
  title = 'app';

  constructor(
    public myAuthServ: AuthService,
    private mapsApiLoader: MapsAPILoader,
    private myRouter: Router,
    private myZone: NgZone
  ) { }

  ngOnInit() {
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

    this.myAuthServ.check()
    .catch((err) => {
      alert("are you sure your internet is working?");
      console.log(err);
    });
  }


  logoutClick() {
    this.myAuthServ.logout()
    .catch((err) => {
      alert("Sorry! issues wih your logout")
      // redirect to index
      console.log(err);
    });
  }

}


