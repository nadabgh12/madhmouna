
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Initialiser avec l'utilisateur du localStorage si existant
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  // Vérifie si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  // Vérifie si l'utilisateur est admin
  isAdmin(): boolean {
    const user = this.currentUserSubject.value;
    return user && user.role === 'admin';
  }

  // Vérifie si l'utilisateur a un des rôles requis
  hasAnyRole(roles: string[]): boolean {
    const user = this.currentUserSubject.value;
    return user && roles.includes(user.role);
  }

  // Méthode de connexion
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('/api/login', { username, password })
      .pipe(
        tap(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }

  // Méthode de déconnexion
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}