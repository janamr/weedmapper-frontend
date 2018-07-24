import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AgmCoreModule } from '@agm/core';
import { FavoritesComponent } from './favorites/favorites.component';
import { PlantPinComponent } from './plant-pin/plant-pin.component';
import { AboutComponent } from './about/about.component';
import { PinDetailsComponent } from './pin-details/pin-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    MapPageComponent,
    FavoritesComponent,
    PlantPinComponent,
    AboutComponent,
    PinDetailsComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjkKUz36__Rld63_mIoL4zKJxf7LA-4lI'
    })
  ],
  providers: [],
  // declarations: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
