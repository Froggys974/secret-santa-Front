import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  // Enregistrement d'un nouvel utilisateur
  register(user: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      catchError(this.handleError<any>('register'))
    );
  }

  // Connexion de l'utilisateur
  login(formData:any): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, formData).pipe(
      tap(response => this.tokenStorage.saveToken(response.token)),
      catchError(this.handleError<any>('login'))
    );
  }

  // Vérifie si un token est stocké et valide
  isAuthenticated(): boolean {
    const token = this.tokenStorage.getToken();
    return !!token;// && this.isTokenValid(token); // Assure-toi que isTokenValid() vérifie la validité du token
  }

  // Efface le token et déconnecte l'utilisateur
  logout(): void {
    this.tokenStorage.removeToken();
  }

  // Vérifie la validité du token (ici, une implémentation simple, mais il faudrait la personnaliser)
  // private isTokenValid(token: string): boolean {
  //   // Exemple simple de vérification du token
  //   // Il est préférable de vérifier la validité côté serveur
  //   return token.length > 0; // Remplace par une vraie logique de validation
  // }

  // Gestion des erreurs
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
