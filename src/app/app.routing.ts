import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LearnTheBasicsComponent } from './pages/learn-the-basics/learn-the-basics.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HelpComponent } from './pages/help/help.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrainDetailComponent } from './train-detail/train-detail.component';
import { EditTrainComponent } from './edit-train/edit-train.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'learn-the-basics',
    component: LearnTheBasicsComponent
  },
  {
    path: 'get-started',
    component: GetStartedComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'create-event',
    component: CreateEventComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'trains/:id',
    component: TrainDetailComponent
  },
  {
    path: 'trains/:id/edit',
    component: EditTrainComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
