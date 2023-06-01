import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../core/services/users/users.service';
import { stringPatternValidator } from '../../../../core/validators/pattern-string.validator';
import { User } from '../../../../core/interfaces/user.interface';
import { ProfileService } from '../../../../core/services/profile/profile.service';
import { ServerErrorResponse } from '../../../../core/interfaces/http-error-response.interface';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthStateService } from '../../../../core/state/auth-state.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  profileDetailsForm: FormGroup;
  isUpdated: boolean = false;
  isNotUpdated: boolean = false;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router,
    private authStateService: AuthStateService
  ) {}

  ngOnInit() {
    this.getUserDetails();
    this.createForm();
  }

  createForm(): void {
    this.profileDetailsForm = this.formBuilder.group({
      firstName: ['', [Validators.required, stringPatternValidator]],
      lastName: ['', [Validators.required, stringPatternValidator]],
      country: ['', [Validators.required, stringPatternValidator]],
      city: ['', [Validators.required, stringPatternValidator]],
      birthdate: [Date, [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.profileDetailsForm.invalid) return;

    this.updateProfile(this.profileDetailsForm.getRawValue());

    this.patchValuesToForm(this.user);
  }

  getUserDetails() {
    this.profileService.getUserDetails().subscribe({
      next: (user: User) => {
        this.user = user;
        this.patchValuesToForm(user);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  updateProfile(user: User): void {
    this.profileService.updateUserDetails(user).subscribe({
      next: (user: User) => {
        this.user = user;
        this.isUpdated = true;
        this.getUserDetails();
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
        this.isNotUpdated = true;
      }
    });
  }

  onSignOut() {
    this.authService.logout().subscribe({
      next: (response: boolean) => {
        if (response) {
          this.authService.deleteTokenFromCookie();
          this.authStateService.updateAuthState(false, '');
          this.router.navigate(['/']);
        }
      },
      error: (error: ServerErrorResponse) => {
        if (error.statusCode == 404) {
          console.log(error.message);
        }
      }
    });
  }

  patchValuesToForm(user: User) {
    this.profileDetailsForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      city: user.city,
      birthdate: user.birthdate,
      gender: user.gender
    });
  }
}
