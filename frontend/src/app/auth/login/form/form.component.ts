import { Component, EventEmitter, Output } from '@angular/core';
import { LoginCredentials } from '../../../core/interfaces/login-credentials.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../core/interfaces/user.interface';
@Component({
  selector: 'app-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class LoginFormComponent {
  @Output() onLoginUser: EventEmitter<LoginCredentials> = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({});
  }

  onLoginAction() {
    const email = 'aridon@gmail.com';
    const password = 'aridon123';
    this.onLoginUser.emit({ email, password });
  }
}
