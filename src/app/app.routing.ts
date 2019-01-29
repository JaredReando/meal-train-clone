import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LearnTheBasicsComponent } from './learn-the-basics/learn-the-basics.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HelpComponent } from './help/help.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
