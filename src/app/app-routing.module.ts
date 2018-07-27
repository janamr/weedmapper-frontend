import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { MapPageComponent } from './map-page/map-page.component';
import { MapComponent } from './map/map.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PlantPinComponent } from './plant-pin/plant-pin.component';
import { AboutComponent } from './about/about.component';
import { PinDetailsComponent } from './pin-details/pin-details.component';
import { SettingsComponent } from './settings/settings.component';
import { CommentsComponent } from './comments/comments.component';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "userPage", component: UserDashboardComponent },
      { path: "plantPin/add", component: PlantPinComponent},
      { path: "favorites", component: FavoritesComponent},
      { path: "about", component: AboutComponent},
      { path: "pin-details", component: PinDetailsComponent},
      { path: "settings", component: SettingsComponent},
      { path: "comments/:plantId", component: CommentsComponent},


      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      { path: "map-page", component: MapPageComponent },
      { path: "map", component: MapComponent },
      // { path: "**", component: NotFoundPageComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
