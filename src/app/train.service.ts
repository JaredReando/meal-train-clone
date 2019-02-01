import { Injectable } from '@angular/core';
import { Train } from './models/train.model';

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

  getTrainById(trainId: string){
    return this.database.object('trains/' + trainId);
  }
}
