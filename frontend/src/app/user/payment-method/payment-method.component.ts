import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent {
  shippingForm: FormGroup;
  billingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.shippingForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
    });

    this.billingForm = this.formBuilder.group({
      nameOnCard: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      securityCode: ['', Validators.required],
    });
  }
  placeOrder() {
    if (this.shippingForm.valid && this.billingForm.valid) {
      console.log('Shipping Information:', this.shippingForm.value);
      console.log('Billing Information:', this.billingForm.value);
    } else {
      console.log('Please fill in all the required fields.');
    }
  }
}



