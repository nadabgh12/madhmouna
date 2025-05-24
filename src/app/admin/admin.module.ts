/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdhesionListComponent } from './adhesion-list/adhesion-list.component';
import { AmbassadeursComponent } from './ambassadeurs/ambassadeurs.component';
import { FemmesListComponent } from './femmes-list/femmes-list.component';
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component';
import { InscriptionManuelleComponent } from './inscription-manuelle/inscription-manuelle.component';
import { ParrainageComponent } from './parrainage/parrainage.component';
import { RapportsComponent } from './rapports/rapports.component';
import { ValidationComptesComponent } from './validation-comptes/validation-comptes.component';
// Importez tous les autres composants...

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'adhesions', component: AdhesionListComponent },
      { path: 'ambassadeurs', component: AmbassadeursComponent },
      { path: 'parrainage', component: ParrainageComponent },
      { path: 'femmes', component: FemmesListComponent },
      { path: 'inscription', component: InscriptionManuelleComponent },
      { path: 'validation', component: ValidationComptesComponent },
      { path: 'rapports', component: RapportsComponent },
      { path: 'comptes', component: GestionComptesComponent },
      { path: '', redirectTo: 'adhesions', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }*/
