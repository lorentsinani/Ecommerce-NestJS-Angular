import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../core/services/users/users.service';
import { stringPatternValidator } from '../../../../core/validators/pattern-string.validator';
import { User } from '../../../../core/interfaces/user.interface';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  profileDetailsForm: FormGroup;
  isUpdated: boolean;
  isNotUpdated: boolean;
  @Input() user: User;
  @Output() onUpdateProfile: EventEmitter<User> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {}

  ngOnInit() {
    this.createForm();
    this.patchValuesToForm(this.user);
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

    this.onUpdateProfile.emit();

    this.patchValuesToForm(this.user);
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
