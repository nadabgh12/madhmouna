import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demande-adhesion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './demande-adhesion.component.html'
})
export class DemandeAdhesionComponent {
  adhesionForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.adhesionForm = this.fb.group({
      // 1. Informations personnelles
      nomComplet: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      adresseComplete: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]],
      email: ['', Validators.email],
      cin: ['', Validators.required],
      statutMarital: ['', Validators.required],
      nombreEnfants: [0, [Validators.required, Validators.min(0)]],

      // 2. Situation socio-économique
      niveauEducation: ['', Validators.required],
      activitePrincipale: ['', Validators.required],
      situationEmploi: ['', Validators.required],
      revenuMensuel: ['', [Validators.required, Validators.min(0)]],
      possessionLogement: ['', Validators.required],
      possessionActifs: ['', Validators.required],
      membresFoyer: ['', Validators.required],

      // 3. Couverture d’assurance
      typeProduit: ['', Validators.required],
      montantCouverture: [''],
      frequencePaiement: ['', Validators.required],
      beneficiaires: ['', Validators.required],
      antecedentsMedicaux: [''],
      absenceSinistres: ['', Validators.required],

      // 4. Documents à fournir (plusieurs fichiers)
      documents: this.fb.array([], Validators.required),

      // 5. Engagements
      acceptConditions: [false, Validators.requiredTrue],
      consentementDonnees: [false, Validators.requiredTrue],
      signatureDate: ['', Validators.required]
    });
  }

  get documents(): FormArray {
    return this.adhesionForm.get('documents') as FormArray;
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    for (let i = 0; i < input.files.length; i++) {
      this.documents.push(this.fb.control(input.files[i]));
    }
  }

  onSubmit() {
    if (this.adhesionForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }

    const formData = new FormData();
   Object.entries(this.adhesionForm.value).forEach(([key, value]) => {
  if (key === 'documents' && Array.isArray(value)) {
    value.forEach((file: File) => formData.append('documents', file, file.name));
  } else {
    // forcer la conversion en string (FormData attend une string pour les champs simples)
    formData.append(key, String(value));
  }
});


    this.http.post('/api/adhesion', formData).subscribe({
      next: () => {
        this.successMessage = 'Votre demande a été envoyée avec succès.';
        this.adhesionForm.reset();
        this.documents.clear();
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = "Une erreur est survenue lors de l'envoi.";
        console.error(err);
      }
    });
  }
}
