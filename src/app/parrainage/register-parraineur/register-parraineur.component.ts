import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-parraineur',
  templateUrl: './register-parraineur.component.html',
  styleUrls: ['./register-parraineur.component.css'],
  imports: [
        FormsModule,ReactiveFormsModule],
})
export class RegisterParraineurComponent implements OnInit {
  registerForm: FormGroup;
  gouvernorats: string[] = [
    'Ariana', 'Béja', 'Ben Arous', 'Bizerte',
    'Gabès', 'Gafsa', 'Jendouba', 'Kairouan',
    'Kasserine', 'Kébili', 'Le Kef', 'Mahdia',
    'La Manouba', 'Médenine', 'Monastir', 'Nabeul',
    'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse',
    'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
  ];
  phonePrefix = '+216';
  today = new Date().toISOString().split('T')[0];
  isLoading = false;
successMessage: any;
errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      userType: ['PARRAINEUR'],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      cin: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      country: ['Tunisie', [Validators.required]],
      gouvernorat: ['', [Validators.required]]
    }, { validator: this.checkPasswords });
  }

  ngOnInit(): void {
    this.loadGouvernorats();
  }

  loadGouvernorats(): void {
    // Vous pouvez charger les gouvernorats depuis un service si nécessaire
    // this.authService.getGouvernorats().subscribe(...);
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    const formData = {
      ...this.registerForm.value,
      phone: this.phonePrefix + this.registerForm.value.phone
    };

    this.authService.registerParraineur(formData).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire('Succès', 'Inscription réussie !', 'success')
          .then(() => this.router.navigate(['/login']));
      },
      error: (error) => {
        this.isLoading = false;
        Swal.fire('Erreur', error.error?.message || 'Erreur lors de l\'inscription', 'error');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}