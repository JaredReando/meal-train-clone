import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Train } from '../models/train.model';
import { TrainService } from '../train.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.css'],
  providers: [TrainService]
})
export class TrainDetailComponent implements OnInit {
  trainId: string;
  trainToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private trainService: TrainService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.trainId = urlParameters['id'];
    });
    this.trainToDisplay = this.trainService.getTrainById(this.trainId);
  }

}
