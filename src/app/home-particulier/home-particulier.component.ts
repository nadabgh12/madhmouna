import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-particulier',
  templateUrl: './home-particulier.component.html',
  styleUrls: ['./home-particulier.component.css'],
  standalone: true,
    imports: [RouterLink],

})
export class HomeParticulierComponent {
  constructor(private router: Router) {}

  goToDemandeFemme() {
    this.router.navigate(['/demande-femme']);
  }

  goToParrainage() {
    this.router.navigate(['/parrainage']);
  }
  navigateToRegister() {
    this.router.navigate(['/register-parrainneur']); // Navigation programmatique
}
}
