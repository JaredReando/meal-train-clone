import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { TrainService } from '../../train.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [TrainService]
})
export class DashboardComponent implements OnInit {
  allTrains: FirebaseListObservable<any[]>;

  constructor(private trainService: TrainService, private router: Router ) { }

  ngOnInit() {
    this.allTrains = this.trainService.getTrains();
  }

  goToDetailPage(clickedTrain) {
    this.router.navigate(['trains/', clickedTrain.$key])
  }

}
