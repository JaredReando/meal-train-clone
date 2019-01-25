import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-train',
  templateUrl: './new-train.component.html',
  styleUrls: ['./new-train.component.css']
})
export class NewTrainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTrain(name: string, email: string) {
    console.log("Your name is " + name + " and your email is " + email);
  }

}
