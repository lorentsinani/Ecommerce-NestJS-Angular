import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../core/interfaces/user.interface';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isCreated: boolean = false;
  badRequest: boolean = false;
  message: string = '';

  constructor(private authService: AuthService) {}

  registerUser(event: User) {
    this.authService.register(event).subscribe({
      next: response => {
        this.isCreated = true;
      },
      error: error => {
        this.badRequest = true;
        this.message = error.message;
      }
    });
  }
}
