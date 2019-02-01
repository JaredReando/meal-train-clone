import { Component, OnInit, Input } from '@angular/core';
import { Train } from '../../models/train.model';
import { Router } from '@angular/router';
import { TrainService } from '../../train.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [TrainService]
})
export class SignInComponent implements OnInit {
  allTrains: FirebaseListObservable<any[]>;

  constructor(private router: Router, private trainService: TrainService) { }

  ngOnInit() {
    this.allTrains = this.trainService.getTrains();
  }

  goToDetailPage(clickedTrain: any) {
    this.router.navigate(['trains', clickedTrain.name])
  }

}
