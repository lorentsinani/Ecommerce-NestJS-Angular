import { CurrencyService } from './../../../../../core/services/currency/currency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../../../../../core/interfaces/currency.interface';
import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../../../../core/services/delivery/delivery.service';
import { Delivery } from '../../../../../core/interfaces/delivery.interface';

@Component({
  selector: 'app-create-form-delivery',
  templateUrl: './create-form-delivery.component.html',
  styleUrls: ['./create-form-delivery.component.scss']
})
export class CreateFormDeliveryComponent implements OnInit {
  form: FormGroup;

  constructor(private deliveryService: DeliveryService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      deliveryDate: ['', Validators.required],
      deliveryComments: [''],
      deliveryCost: ['', Validators.required],
      deliveryMethodId: ['', Validators.required],
      deliveryStatus: ['', Validators.required],
      promisedDeliveryDate: ['', Validators.required],
      deliveryOrderId: ['', Validators.required]
    });
  }

  onCreate() {
    if (this.form.invalid) {
      return;
    }

    const delivery = this.form.getRawValue();
    this.createDelivery(delivery);
    this.form.reset();
  }

  createDelivery(delivery: Delivery) {
    this.deliveryService.createDelivery(delivery).subscribe(delivery => {});
  }
}
