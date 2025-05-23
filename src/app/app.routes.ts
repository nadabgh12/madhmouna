import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AmbassadorComponent } from './ambassadeur/ambassadeur.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ParrainageComponent } from './parrainage/parrainage.component';
import { InscriptionFemmeComponent } from './inscription-femme/inscription-femme.component';
import { DashboardFemmesComponent } from './dashboard-femmes/dashboard-femmes.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeParticulierComponent } from './home-particulier/home-particulier.component';
import path from 'path';
import { Component } from '@angular/core';
import {AuthGuard} from './admin/auth.guard';
export const routes: Routes = [
  { path: '', component: SplashScreenComponent }, // page de démarrage ou d'accueil
  { path: 'home', component: HomeComponent },

 { path: 'ambassador', component: AmbassadorComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'parrainage', component: ParrainageComponent },
  { path: 'inscription-femme', component: InscriptionFemmeComponent },
  {  path: 'dashborad-femmes', component: DashboardFemmesComponent },
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'particulier',component:HomeParticulierComponent},

  // TODO Routes lazy-loaded :
  /*{
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'ambassador',
    loadChildren: () =>
      import('./features/ambassador/ambassador.module').then(m => m.AmbassadorModule),
  },
  {
    path: 'dashborad-femmes',
    loadChildren: () =>
      import('./features/dashboard-femmes/dashboard-femmes.module').then(m => m.DashboardFemmesModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./features/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./features/reset-password/reset-password.module').then(m => m.ResetPasswordModule),
  },
  {
    path: 'particulier',
    loadChildren: () =>
      import('./features/particulier/particulier.module').then(m => m.HomeParticulierModule),
  },*/
  { path: '**', redirectTo: '' }
];
