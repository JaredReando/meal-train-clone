import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LearnTheBasicsComponent } from './pages/learn-the-basics/learn-the-basics.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HelpComponent } from './pages/help/help.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TrainDetailComponent } from './train-detail/train-detail.component';

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
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'trains/:id',
    component: TrainDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
