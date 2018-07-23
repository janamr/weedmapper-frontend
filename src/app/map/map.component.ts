import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgmCoreModule } from '@agm/core';



// import { ViewChild } from '@angular/core';
// import { google } from '@types/googlemaps';

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

  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;
  lat: number = 56.678418;
  lng: number = 10.809007;

  constructor(
    public myRouterServ: Router
  ) { }

  ngOnInit() {
  }


  // setMapType(mapTypeId: string) {
  //     this.map.setMapTypeId(mapTypeId)
  //   }


  }

  // export class MapComponent {
  //   // @ViewChild('gmap') gmapElement: any;
  //   // map: google.maps.Map;


  //   ngOnInit() {
  //     var mapProp = {
  //       center: new google.maps.LatLng(18.5793, 73.8143),
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     };
  //     this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  //   }
  // }