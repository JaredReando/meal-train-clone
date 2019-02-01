import { Injectable } from '@angular/core';
import { Train } from './models/train.model';
import { allTrains } from './mock-trains'

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  allTrains: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.allTrains = database.list('trains')
  }

  getTrains() {
    return this.allTrains;
  }

  addTrain(newTrain: Train) {
    this.allTrains.push(newTrain);
  }

  getTrainById(trainId: any){
    // for (let i = 0; i < allTrains.length; i++) {
    //   if(allTrains[i].name === trainId) {
    //     return allTrains[i];
    //   }
    // }
  }
}
