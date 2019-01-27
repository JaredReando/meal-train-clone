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

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavFooterComponent,
    NavBodyComponent,
    NewTrainComponent,
    ListTrainsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
