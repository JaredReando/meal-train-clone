import { Component, OnInit, Input } from '@angular/core';
import { Train } from '../../models/train.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private router: Router) { }

  allTrains: Train[];

  goToDetailPage(clickedTrain: any) {
    console.log(clickedTrain.name);
    this.router.navigate(['trains', clickedTrain.name])
  }
}
