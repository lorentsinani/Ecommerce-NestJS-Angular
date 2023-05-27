import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/header/topbar/topbar.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/footer/newsletter/newsletter.component';
import { FooterInfoComponent } from './components/footer/footer-info/footer-info.component';
import { FooterCopyrightComponent } from './components/footer/footer-copyright/footer-copyright.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * The 'core' module is a commonly used module in angular applications for storing components and services that are shared across multiple modules. For example the header and footer component is the same for auth and user module.
 */

@NgModule({
  declarations: [
    HeaderComponent,
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
    NewsletterComponent,
    FooterInfoComponent,
    FooterCopyrightComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, TopbarComponent, NavbarComponent, FooterComponent, NewsletterComponent, FooterInfoComponent]
})
export class CoreModule {}
