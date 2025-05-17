import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
})
export class RegisterComponent implements OnInit {
  errorMessage: any;
  successMessage: any;
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    cin: '',
    birthDate: '',
    country: '',
    userType: 'AMBASSADEUR',
    typeAmbassadeur: '',
    association: '',
    gouvernorat: ''
  };
  phonePrefix = '+216';
  today = new Date().toISOString().split('T')[0];
  isLoading = false;
  gouvernorats: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadGouvernorats();
  }

  loadGouvernorats(): void {
    this.authService.getGouvernorats().subscribe({
      next: (response: any) => {
        this.gouvernorats = response.gouvernorats || [];
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des gouvernorats', error);
        Swal.fire('Erreur', 'Impossible de charger la liste des gouvernorats.', 'error');
      }
    });
  }

  toggleAssociationField(): void {
    if (this.user.typeAmbassadeur !== 'ASSOCIATION') {
      this.user.association = '';
    }
  }

  onSubmit(form: NgForm): void {
    console.log('onSubmit called'); // Vérification
    if (form.invalid) {
      Object.values(form.controls).forEach(ctrl => ctrl.markAsTouched());
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      Swal.fire('Erreur', 'Les mots de passe ne correspondent pas', 'error');
      return;
    }

    this.isLoading = true;
    const payload: any = {
      ...this.user,
      phone: this.phonePrefix + this.user.phone
    };
    if (this.user.typeAmbassadeur !== 'ASSOCIATION') {
      delete payload.association;
    }

    console.log('Payload:', payload); // Vérification du payload

    const obs = this.user.userType === 'AMBASSADEUR'
      ? this.authService.registerAmbassadeur(payload)
      : this.authService.registerParraineur(payload);

    obs.subscribe({
      next: (response) => {
        this.isLoading = false;
        Swal.fire('Succès', 'Inscription réussie !', 'success');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Erreur d\'inscription', error);
        Swal.fire('Erreur', error.error?.message || error.message || 'Erreur inconnue', 'error');
      }
    });
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}