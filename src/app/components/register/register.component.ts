import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerFields = {
    username: { label: 'Username', type: 'text', required: true },
    email: { label: 'Email', type: 'email', required: true },
    password: { label: 'Password', type: 'password', required: true }
  };

  constructor(private router: Router) {}

  onRegister(formData: any) {
    // Logique pour gérer l'inscription utilisateur
    console.log('Register Data:', formData);
    // Redirection après inscription réussie
    this.router.navigate(['/login']);
  }
}
