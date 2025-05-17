import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-particulier',
  templateUrl: './home-particulier.component.html',
  styleUrls: ['./home-particulier.component.css'],
  standalone: true
})
export class HomeParticulierComponent {
  constructor(private router: Router) {}

  goToDemandeFemme() {
    this.router.navigate(['/demande-femme']);
  }

  goToParrainage() {
    this.router.navigate(['/parrainage']);
  }
}
