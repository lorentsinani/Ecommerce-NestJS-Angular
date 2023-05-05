import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './login/form/form.component';
import { RegisterFormComponent } from './register/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, LoginFormComponent, RegisterFormComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule {}
