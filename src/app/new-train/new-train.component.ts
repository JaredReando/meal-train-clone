import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Train } from '../models/train.model';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-new-train',
  templateUrl: './new-train.component.html',
  styleUrls: ['./new-train.component.css']
})
export class NewTrainComponent implements OnInit {

  constructor(private trainservice: TrainService) {}

  ngOnInit() {
  }

  submitForm(
    name: string,
    email: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    phone: string,
    dates: string,
    groupSize: string,
    deliveryTimePreferences: string,
    specialInstructions: string,
    favoriteMeals: string,
    leastFavoriteMeals: string,
    foodRestrictions: string) {

    let newTrain = new Train(name, email, address, city, state, zip, phone, dates, groupSize, deliveryTimePreferences, specialInstructions, favoriteMeals, leastFavoriteMeals, foodRestrictions);

    this.trainservice.addTrain(newTrain);

  }


}
