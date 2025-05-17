// inscription-femme.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inscription-femme',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './inscription-femme.component.html',
  styleUrls: ['./inscription-femme.component.css']
})
export class InscriptionFemmeComponent {
  femme = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    gouvernorat: '',
    cin: '',
    nbrEnfants: 0,
    activite: '',
    fileCIN: null as File | null
  };

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.femme.fileCIN = event.target.files[0];
  }

  envoyer() {
    const formData = new FormData();
    const donneesJson = JSON.stringify({
      nom: this.femme.nom,
      prenom: this.femme.prenom,
      dateNaissance: this.femme.dateNaissance,
      gouvernorat: this.femme.gouvernorat,
      cin: this.femme.cin,
      nbrEnfants: this.femme.nbrEnfants,
      activite: this.femme.activite
    });
  
    formData.append('donnees', new Blob([donneesJson], { type: 'application/json' }));
  
    if (this.femme.fileCIN) {
      formData.append('fileCIN', this.femme.fileCIN);
    }
  
    this.http.post('http://localhost:8080/api/femmes/inscription', formData).subscribe({
      next: () => alert('✅ Femme inscrite avec succès'),
      error: (err) => {
        if (err.status === 409) {
          alert('❗ CIN déjà enregistrée');
        } else {
          alert('❌ Erreur lors de l\'inscription');
        }
      }
    });
  }
}