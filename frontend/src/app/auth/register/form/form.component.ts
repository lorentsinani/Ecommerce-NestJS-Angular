import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../core/interfaces/user.interface';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
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
