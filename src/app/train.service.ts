import { Injectable } from '@angular/core';
import { Train } from './models/train.model';
import { allTrains } from './mock-trains'

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor() { }

  getTrains() {
    return allTrains;
  }
  getTrainById(trainId: any){
    for (let i = 0; i < allTrains.length; i++) {
      if(allTrains[i].name === trainId) {
        return allTrains[i];
      }
    }
  }
}
