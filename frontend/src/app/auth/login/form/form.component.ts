import { passwordValidator } from './../../../core/validators/password.validator';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoginCredentials } from '../../../core/interfaces/login-credentials.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/interfaces/user.interface';
import { emailValidator } from '../../../core/validators/email.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class LoginFormComponent {
  @Output() onLoginUser: EventEmitter<LoginCredentials> = new EventEmitter();
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.onLoginUser.emit(this.loginForm.getRawValue());

    this.loginForm.reset();
  }
}
