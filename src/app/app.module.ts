import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Train } from '././models/train.model'

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavBodyComponent } from './nav-body/nav-body.component';
import { NewTrainComponent } from './new-train/new-train.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { routing } from './app.routing';
import { LearnTheBasicsComponent } from './pages/learn-the-basics/learn-the-basics.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HelpComponent } from './pages/help/help.component';
import { TrainDetailComponent } from './train-detail/train-detail.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditTrainComponent } from './edit-train/edit-train.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavFooterComponent,
    NavBodyComponent,
    NewTrainComponent,
    WelcomeComponent,
    LearnTheBasicsComponent,
    GetStartedComponent,
    HelpComponent,
    TrainDetailComponent,
    CreateEventComponent,
    DashboardComponent,
    EditTrainComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
