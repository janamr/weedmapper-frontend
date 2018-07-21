import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ViewChild } from '@angular/core';
// import { } from '@types/googlemaps';

export class AppComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;


  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  styles: [`
    agm-map {
      height: 600px; width: 50%;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    public myRouterServ: Router
  ) { }

  ngOnInit() {
  }


  // setMapType(mapTypeId: string) {
  //   this.map.setMapTypeId(mapTypeId)
  // }


}
