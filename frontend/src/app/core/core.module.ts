import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './footer/newsletter/newsletter.component';
import { FooterInfoComponent } from './footer/footer-info/footer-info.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';

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
    FooterCopyrightComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
    NewsletterComponent,
    FooterInfoComponent,
  ],
})
export class CoreModule {}
