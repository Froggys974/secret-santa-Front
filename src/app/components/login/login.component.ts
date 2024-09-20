import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFields= {
    email: { label: 'Email', type: 'email', required: true },
    password: { label: 'Password', type: 'password', required: true }
  };

  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
    // Création du formulaire avec validation
    
  }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication() {
    if (this.tokenStorage.isTokenPresent()) {
      // Redirige vers la page de profil si le token est présent
      this.router.navigate(['/profile']);
    }
  }

  onLogin(formData:any): void {
    
    const { email, password } = formData;

    this.userService.login(formData).subscribe({
      next: (data)=>{
        this.tokenStorage.saveToken(data.token);
        
        // Redirection vers le profil après connexion réussie
        this.router.navigate(['/profile']);
      },
      error: (error)=>{
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      },

    });
  }
}
