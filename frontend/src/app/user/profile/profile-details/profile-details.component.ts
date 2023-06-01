import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { User } from '../../../core/interfaces/user.interface';
import { UsersService } from '../../../core/services/users/users.service';
import { stringPatternValidator } from '../../../core/validators/pattern-string.validator';
import { emailValidator } from '../../../core/validators/email.validator';
import { passwordValidator } from '../../../core/validators/password.validator';
import { ServerErrorResponse } from '../../../core/interfaces/http-error-response.interface';
import { ProfileService } from '../../../core/services/profile/profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  isUpdated: boolean;
  isNotUpdated: boolean;

  constructor() {}

  ngOnInit() {}
}
