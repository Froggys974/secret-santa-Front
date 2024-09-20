import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private tokenKey = 'authToken';

  constructor() { }

  // Stocker le token dans le localStorage
  public saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Récupérer le token depuis le localStorage
  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Effacer le token du localStorage
  public removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Vérifier si le token existe
  public isTokenPresent(): boolean {
    return !!this.getToken();
  }
}
