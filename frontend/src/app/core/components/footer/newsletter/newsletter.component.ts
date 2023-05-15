import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../../validators/email.validator';
import { NewsletterService } from './newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  isSubscribe: boolean;
  newsletterForm: FormGroup;
  email: string;
  isNotSubscribe: boolean;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private newsletterService: NewsletterService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.newsletterForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]]
    });
  }

  onSubmit() {
    if (this.newsletterForm.invalid) {
      return;
    }

    this.subscribeToNewsletter(this.newsletterForm.value.email);

    this.newsletterForm.reset();
  }

  subscribeToNewsletter(email: string): void {
    this.newsletterService.joinUserForNewsletter(email).subscribe({
      next: data => {
        this.isSubscribe = true;
      },
      error: error => {
        this.isNotSubscribe = true;
      }
    });
  }
}
