import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { LoginCredentials } from '../../core/interfaces/login-credentials.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginUser(loginCredentials: LoginCredentials) {
    this.authService.login(loginCredentials).subscribe(response => {});
  }
}
