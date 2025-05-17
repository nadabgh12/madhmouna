import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parrainage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parrainage.component.html',
  styleUrls: ['./parrainage.component.css']
})
export class ParrainageComponent {
  femmes = [
    { nom: 'Fatma', age: 35, gouvernorat: 'Le Kef', montant: 25 },
    { nom: 'Meriem', age: 28, gouvernorat: 'Siliana', montant: 30 }
  ];
  selectedFemme: any = null;
  showModal = false;

  parrainer(femme: any) {
    this.selectedFemme = femme;
    this.showModal = true;
  }

  payer() {
    alert(`✅ Paiement de ${this.selectedFemme.montant} DT effectué avec succès pour ${this.selectedFemme.nom}`);
    this.fermer();
  }

  fermer() {
    this.showModal = false;
    this.selectedFemme = null;
  }
}
