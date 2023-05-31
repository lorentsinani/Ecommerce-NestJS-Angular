import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { User } from '../../../core/interfaces/user.interface';
import { UsersService } from '../../../core/services/users/users.service';
import { stringPatternValidator } from '../../../core/validators/pattern-string.validator';
import { emailValidator } from '../../../core/validators/email.validator';
import { passwordValidator } from '../../../core/validators/password.validator';
import { ServerErrorResponse } from '../../../core/interfaces/http-error-response.interface';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {
  user: User;
  isUpdated: boolean;
  isNotUpdated: boolean;

  constructor(private usersService: UsersService) {}

  // ngOnInit() {
  //   this.getUserDetails();
  // }

  // getUserDetails() {
  //   this.usersService.getUserDetails().subscribe({
  //     next: (user: User) => {
  //       this.user = user;
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   });
  // }

  // updateProfile(user: User): void {
  //   this.usersService.updateUserDetails(user).subscribe({
  //     next: (user: User) => {
  //       this.user = user;
  //       this.isUpdated = true;
  //     },
  //     error: (error: ServerErrorResponse) => {
  //       console.log(error);
  //       this.isNotUpdated = true;
  //     }
  //   });
  // }
}
