import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
    imports: [FormsModule],

})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (!this.email) {
      Swal.fire('Erreur', 'Veuillez saisir votre email', 'error');
      return;
    }

    this.authService.forgotPassword(this.email).subscribe({
      next: () => Swal.fire('Succès', 'Email de réinitialisation envoyé', 'success'),
      error: (err: { error: { message: any; }; }) => Swal.fire('Erreur', err.error?.message || 'Erreur serveur', 'error')
    });
  }
}
