import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
    imports: [FormsModule],

})
export class ResetPasswordComponent {
  token: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.token = this.route.snapshot.queryParams['token'] || '';
  }

  onSubmit() {
    if (!this.newPassword || !this.confirmPassword) {
      Swal.fire('Erreur', 'Veuillez remplir tous les champs', 'error');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      Swal.fire('Erreur', 'Les mots de passe ne correspondent pas', 'error');
      return;
    }

    this.authService.resetPassword(this.token, this.newPassword).subscribe({
      next: () => {
        Swal.fire('Succès', 'Mot de passe réinitialisé', 'success');
        this.router.navigate(['/login']);
      },
      error: (err: { error: { message: any; }; }) => Swal.fire('Erreur', err.error?.message || 'Erreur serveur', 'error')
    });
  }
}
