import { ModuleWithProviders } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {AuthGuard} from './auth-guard/auth.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'user',
    component: UserdashboardComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [
      AuthGuard
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);