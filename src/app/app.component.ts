import { Component, Output } from '@angular/core';
import { Train } from './models/train.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meal-train';


  allTrains: Train[] = [
    new Train('Jared Reando', 'jaredreando@gmail.com', '13277 NE Eugene St.', 'Portland', 'OR', '97230', '503-863-4554', 'January 29, 2019, January 30, 2019, February 2, 2019', '2', 'Please delivery between 4 and 6pm if possible', 'We eat mostly simple meats and veggies.', 'Chicken and rice.', 'Just rice (no chicken)', 'Can\'t watermelons without cutting them up first.'),
    new Train('Jack White', 'jackwhite@gmail.com', '13277 NE Eugene St.', 'Portland', 'OR', '97230', '503-863-4554', 'January 29, 2019, January 30, 2019, February 2, 2019', '2', 'Please delivery between 4 and 6pm if possible', 'We eat mostly simple meats and veggies.', 'Chicken and rice.', 'Just rice (no chicken)', 'Can\'t watermelons without cutting them up first.')
  ]

  addTrain(newTrain: Train) {
    this.allTrains.push(newTrain);
  }

}
