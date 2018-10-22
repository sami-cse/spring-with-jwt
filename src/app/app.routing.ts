import { ModuleWithProviders } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);