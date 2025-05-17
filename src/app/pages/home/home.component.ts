import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedRole: string | null = null;

  // Solution plus propre pour l'image.
  femmeImagePath = 'assets/femme.jpg'; // À adapter selon votre nom de fichier

  constructor(private router: Router) {}

  showFeatures(role: string) { // Définir le type du paramètre
    // Cacher les sections de fonctionnalités
    document.getElementById('ambassadeur')!.style.display = 'none';
    document.getElementById('particulier')!.style.display = 'none';

    // Afficher la section correspondante
    document.getElementById(role)!.style.display = '';

    // Afficher le rôle sélectionné
    const roleDisplay = document.getElementById('selectedRoleDisplay');
    if (role === 'ambassadeur') {
      roleDisplay!.textContent = "Vous avez sélectionné le rôle : Ambassadeur";
    } else if (role === 'particulier') {
      roleDisplay!.textContent = "Vous avez sélectionné le rôle : Particulier";
    }
  }
}