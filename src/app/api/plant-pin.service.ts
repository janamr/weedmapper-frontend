import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

const { backendUrl } = environment;


@Injectable({
  providedIn: 'root'
})
export class PlantPinService {
  latitude: number;
  longitude: number;

  mapLocation: google.maps.LatLng;

  constructor(
    private myHttpServ: HttpClient

  ) { }

    // GET /api/phones
    getUserPinsList() {
      // return the Promise of the request (component will ".then()" & ".catch()")
      return this.myHttpServ
      .get(
        `${backendUrl}/userPins`,
        { withCredentials: true }
      )
      .toPromise();
    }

    getAllPinsList() {
      // return the Promise of the request (component will ".then()" & ".catch()")
      return this.myHttpServ
      .get(
        `${backendUrl}/allPins`,
        { withCredentials: true }
      )
      .toPromise();
    }

    // GET /api/phone/:id
    // id is a parameter of a method
    getPlantPinItem(id) {
      // return the Promise of the request (component will ".then()" & ".catch()")
      return this.myHttpServ
      .get(
        `${backendUrl}/userPins/${id}`,
        { withCredentials: true }
       )
      .toPromise();
    }

    // DELETE /api/phone/:id
    deletePlantPinItem(id) {
      // return the Promise of the request (component will ".then()" & ".catch()")
      return this.myHttpServ
      .delete(
        `${backendUrl}/process-plantPin/${id}`,
      { withCredentials: true }
    )
      .toPromise();
    }

    postPlantPin(plantPinInfo: PlantPinSubmission) {
      // return the Promist fo the request (component will ".then()" & ".catch()")
      return this.myHttpServ
      .post(
        `${backendUrl}/process-plantPin`,
        plantPinInfo,
      { withCredentials: true }
    )
      .toPromise();
    }

    getUserFavoritesList () {
      return this.myHttpServ
      .get(
        `${backendUrl}/user-favorites`,
      { withCredentials: true }
      )
      .toPromise();
    }


    postToFavorites( id ) {
      console.log(id);
      return this.myHttpServ
      .post(
        `${backendUrl}/process-favorites`,
        {id},
      { withCredentials: true }
      )
      .toPromise();
    }

    getMapLat() {
      if (this.mapLocation) {
        return this.mapLocation.lat();
      }
      else {
        return 48.871757;
      }
    }

    getMapLng() {
      if (this.mapLocation) {
        return this.mapLocation.lng();
      }
      else {
        return 2.311004;
      }
    }

    getUserCommentsList () {
      return this.myHttpServ
      .get(
        `${backendUrl}/user-comments`,
      { withCredentials: true }
      )
      .toPromise();
    }

    postComment( commentInfo: CommentSubmission ) {
      // console.log(id);
      return this.myHttpServ
      .post(
        `${backendUrl}/process-comments`,
        // {id},
        { withCredentials: true }
      )
      .toPromise();
    }
  }

export class PlantPin {
  _id: string;
  latitude: number;
  longitude: number;
  draggable: boolean = false;
  name: string;
  imageUrl: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export class PlantPinSubmission {
  name: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
}

export class CommentSubmission {
  userComment: string;
}