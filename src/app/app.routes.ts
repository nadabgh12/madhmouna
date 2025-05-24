import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SplashScreenComponent } from './pages/home/splash-screen/splash-screen.component';
import { AmbassadorComponent } from './ambassadeur/ambassadeur.component';
import { LoginComponent } from './././login/login.component';
import { RegisterComponent } from './ambassadeur/register/register.component';
import { ParrainageComponent } from './parrainage/parrainage.component';
import { InscriptionFemmeComponent } from './inscription-femme/inscription-femme.component';
import { DashboardFemmesComponent } from './dashboard-femmes/dashboard-femmes.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeParticulierComponent } from './home-particulier/home-particulier.component';
import { RegisterParraineurComponent } from './parrainage/register-parraineur/register-parraineur.component';
import { DemandeAdhesionComponent } from './ambassadeur/demande-adhesion/demande-adhesion.component';
import path from 'path';
import { Component } from '@angular/core';
import { Ambassadeur } from './models/ambassadeur';
import { MadhmounaComponent } from './ambassadeur/madhmouna/madhmouna.component';
export const routes: Routes = [
  { path: '', component: SplashScreenComponent }, // page de démarrage ou d'accueil
  { path: 'home', component: HomeComponent },
  { path: 'ambassador', component: AmbassadorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'parrainage', component: ParrainageComponent },
  { path: 'inscription-femme', component: InscriptionFemmeComponent },
  {  path: 'dashborad-femmes', component: DashboardFemmesComponent },
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'particulier',component:HomeParticulierComponent},

  {path: '' , component:MadhmounaComponent},
  {path:'', component:DemandeAdhesionComponent},
  {path:'register-parraineur', component:RegisterParraineurComponent},
  { path: '**', redirectTo: '' }
];
