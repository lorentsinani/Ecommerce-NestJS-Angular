import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { LoginCredentials } from '../../core/interfaces/login-credentials.interface';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationResponse } from '../../core/interfaces/authentication-response.interface';
import { LoginResponse } from '../../core/interfaces/login-response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loggedInFailed = false;

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {}

  loginUser(loginCredentials: LoginCredentials) {
    this.authService.login(loginCredentials).subscribe({
      next: (response: AuthenticationResponse) => {
        const accessToken = (response as LoginResponse)?.accessToken ?? '';
        const redirectUrl = (response as LoginResponse)?.redirectUrl ?? '';

        this.cookieService.set('accessToken', accessToken, undefined, '/', undefined, true, 'Strict');

        this.router.navigate([redirectUrl]);
      },
      error: error => {
        this.loggedInFailed = true;
      }
    });
  }
}
