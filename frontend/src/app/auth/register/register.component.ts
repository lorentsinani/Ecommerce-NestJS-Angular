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
  userCreated: boolean = false;
  userExist: boolean = false;
  badRequest: boolean = false;

  constructor(private authService: AuthService) {}

  registerUser(event: User) {
    this.authService.register(event).subscribe({
      next: response => {
        this.userCreated = true;
      },
      error: error => {
        if (error.statusCode === 409) {
          this.userExist = true;
        } else {
          this.badRequest = true;
        }
        console.log(error);
      }
    });
  }
}
