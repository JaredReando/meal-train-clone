import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavBodyComponent } from './nav-body/nav-body.component';
import { NewTrainComponent } from './new-train/new-train.component';
import { ListTrainsComponent } from './list-trains/list-trains.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { LearnTheBasicsComponent } from './learn-the-basics/learn-the-basics.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavFooterComponent,
    NavBodyComponent,
    NewTrainComponent,
    ListTrainsComponent,
    WelcomeComponent,
    LearnTheBasicsComponent,
    GetStartedComponent,
    SignUpComponent,
    SignInComponent,
    HelpComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
