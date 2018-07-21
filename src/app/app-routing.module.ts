import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MapComponent } from './map/map.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PlantPinComponent } from './plant-pin/plant-pin.component';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  // { path: "phones", component: PhoneListPageComponent },
  { path: "plantPin/add", component: PlantPinComponent},
  { path: "favorites", component: FavoritesComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "map-page", component: MapPageComponent },
  { path: "map", component: MapComponent },


  // { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
