import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../../core/validators/password.validator';
import { AuthService } from '../../../core/services/auth/auth.service';
import { User } from '../../../core/interfaces/user.interface';
import { ServerErrorResponse } from '../../../core/interfaces/http-error-response.interface';
import { AuthenticationResponse } from '../../../core/interfaces/authentication-response.interface';
import { passwordMatchValidator } from '../../../core/validators/password-match.validator';
import { UsersService } from '../../../core/services/users/users.service';
import { ProfileService } from '../../../core/services/profile/profile.service';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.scss']
})
export class SecurityDetailsComponent implements OnInit {
  securityDetailsForm: FormGroup;
  isUpdated: boolean;
  isNotUpdated: boolean;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.securityDetailsForm = this.formBuilder.group(
      {
        currentPassword: ['', [Validators.required, passwordValidator]],
        newPassword: ['', [Validators.required, passwordValidator]],
        confirmPassword: ['', [Validators.required, passwordValidator]]
      },
      { validators: passwordMatchValidator }
    );
  }

  onSubmit(): void {
    if (this.securityDetailsForm.invalid) return;

    this.changePassword(this.securityDetailsForm.getRawValue());

    this.securityDetailsForm.reset();
  }

  changePassword(user: Partial<User>): void {
    this.profileService.updateUserPassword(user).subscribe({
      next: (authResponse: AuthenticationResponse) => {
        this.isUpdated = true;
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
        this.isNotUpdated = true;
      }
    });
  }
}
