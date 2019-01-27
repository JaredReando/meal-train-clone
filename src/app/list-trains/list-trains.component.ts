import { Component, OnInit, Input } from '@angular/core';
import { Train } from '../models/train.model';

@Component({
  selector: 'app-list-trains',
  templateUrl: './list-trains.component.html',
  styleUrls: ['./list-trains.component.css']
})
export class ListTrainsComponent {

@Input() allTrains: Train[];

}
