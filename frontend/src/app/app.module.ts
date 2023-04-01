import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './user/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, BlogComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, UserModule, CoreModule, AuthModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
