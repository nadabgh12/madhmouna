import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreenComponent } from './pages/home/splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SplashScreenComponent, RouterOutlet, CommonModule],
  template: `
   <app-splash-screen *ngIf="showSplashScreen"></app-splash-screen>
<router-outlet *ngIf="!showSplashScreen"></router-outlet>

  `
})
export class AppComponent {
  login(login: any) {
    throw new Error('Method not implemented.');
  }
  showSplashScreen = true;

  constructor(private router: Router) {
    setTimeout(() => {
      this.showSplashScreen = false;
      this.router.navigate(['/home']);
    }, 3000);
  }
}
