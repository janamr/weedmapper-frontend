import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const backendUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class PlantPinService {

  constructor(
    private myHttpServ: HttpClient

  ) { }

    // GET /api/phones
    getPlantPinsList() {
      // return the Promise of the request (component will ".then()" & ".catch()")
      return this.myHttpServ
      .get(
        `${backendUrl}/plantPins`,
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
        `${backendUrl}/plantPins/${id}`,
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
  brand: string;
  name: string;
  image: string;
  specs: Array<string> = [];
}