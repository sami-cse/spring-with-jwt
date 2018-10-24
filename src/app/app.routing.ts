import { ModuleWithProviders } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserAuthGuard } from './auth-guard/user.auth.guard';
import { AdminAuthGuard } from './auth-guard/admin.auth.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      AdminAuthGuard
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'user',
    component: UserdashboardComponent,
    canActivate: [
      UserAuthGuard
    ]
  },
  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [
      AdminAuthGuard
    ]
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);