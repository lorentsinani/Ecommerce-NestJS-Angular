import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../core/interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringPatternValidator } from '../../../core/validators/pattern-string.validator';
import { passwordValidator } from '../../../core/validators/password.validator';
import { emailValidator } from '../../../core/validators/email.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class RegisterFormComponent {
  @Output() onRegisterUser: EventEmitter<User> = new EventEmitter();
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, stringPatternValidator]],
      lastName: ['', [Validators.required, stringPatternValidator]],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]],
      country: ['', [Validators.required, stringPatternValidator]],
      city: ['', [Validators.required, stringPatternValidator]],
      birthdate: [Date, [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    this.onRegisterUser.emit(this.registerForm.getRawValue());

    this.registerForm.reset();
  }
}
