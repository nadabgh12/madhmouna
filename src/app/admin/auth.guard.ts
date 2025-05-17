import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.guard.spec';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // 1. Vérifier si l'utilisateur est connecté
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login'], { 
        queryParams: { 
          returnUrl: state.url 
        } 
      });
      return false;
    }

    // 2. Vérifier si l'utilisateur a le rôle admin
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/acces-refuse']);
      return false;
    }

    // 3. Vérifier les permissions spécifiques si nécessaire
    const requiredRoles = route.data['roles'] as Array<string>;
    if (requiredRoles && !this.authService.hasAnyRole(requiredRoles)) {
      this.router.navigate(['/acces-refuse']);
      return false;
    }

    return true;
  }
}