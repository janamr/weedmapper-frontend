import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

const { backendUrl } = environment;


@Injectable({
  providedIn: 'root'
})
export class PlantPinService {

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

      // POST /api/phones
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
  }

export class PlantPin {
  _id: string;
  brand: string;
  name: string;
  image: string;
  specs: Array<string>;
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