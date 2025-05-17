import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ambassadeur } from '../models/ambassadeur';
import { Authenticationrequest } from '../models/authenticationrequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // private apiUrl = 'http://localhost:8080/api/v1/auth';
   private apiUrl = 'http://localhost:8080/api/auth/register';

  resetPassword: any;
  forgotPassword: any;
  baseUrl: any;

  constructor(private http: HttpClient) {}
registerAmbassadeur(ambassadeur :Ambassadeur ): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}/registerambassadeur`, ambassadeur);
  }
  login(authenticationrequest:Authenticationrequest): Observable<AuthenticatorResponse> {
    return this.http.post<AuthenticatorResponse>(`${this.apiUrl}/authenticate`,authenticationrequest);
  }

  // ✅ Enregistrement d’un parraineur
  registerParraineur(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/parraineur`, payload);
  }

  

  // ✅ Déconnexion (si tu utilises JWT côté frontend)
  logout(): void {
    localStorage.removeItem('token');
  }

  // ✅ Sauvegarde du token (si nécessaire)
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
// ✅ Récupérer la liste des gouvernorats
  getGouvernorats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/gouvernorats`);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
