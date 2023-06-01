import { CurrencyService } from './../../../../../core/services/currency/currency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../../../../../core/interfaces/currency.interface';
import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../../../../core/services/delivery/delivery.service';
import { Delivery } from '../../../../../core/interfaces/delivery.interface';
import { DeliveryMethod } from '../../../../../core/interfaces/delivery-method.interface';
import { DeliveryMethodService } from '../../../../../core/services/delivery-method/delivery-method.service';
import { Order } from '../../../../../core/interfaces/order.interface';
import { OrderService } from '../../../../../core/services/order/order.service';
import { ServerErrorResponse } from '../../../../../core/interfaces/http-error-response.interface';
@Component({
  selector: 'app-create-form-delivery',
  templateUrl: './create-form-delivery.component.html',
  styleUrls: ['./create-form-delivery.component.scss']
})
export class CreateFormDeliveryComponent implements OnInit {
  form: FormGroup;
  orders: Order[];
  deliveries: Delivery[];
  deliveriesMethod: DeliveryMethod[];
  isCreated: boolean;
  isNotCreated: boolean;
  constructor(
    private deliveryService: DeliveryService,
    private fb: FormBuilder,
    private deliveryMethodService: DeliveryMethodService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getAllDeliveryMethods();
    this.getAllOrders();
    this.toggleDeliveryResults();
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

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(orders => {
      this.orders = orders; // Assign the fetched deliveries to the component property
    });
  }

  getAllDeliveries() {
    this.deliveryService.getAllDeliveries().subscribe(deliveries => {
      this.deliveries = deliveries;
    });
  }
  deleteDelivery(id: number) {
    this.deliveryService.deleteDelivery(id).subscribe(() => {
      this.deliveries = this.deliveries.filter(delivery => delivery.id !== id);
    });
  }
  showDeliveryResults = false;

  toggleDeliveryResults(): void {
    this.showDeliveryResults = !this.showDeliveryResults;
    if (this.showDeliveryResults) {
      this.getAllDeliveries();
    }
  }

  getAllDeliveryMethods() {
    this.deliveryMethodService.getAllDeliveriesMethod().subscribe(deliveriesMethod => {
      this.deliveriesMethod = deliveriesMethod;
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
    this.deliveryService.createDelivery(delivery).subscribe({
      next: (createdDelivery: Delivery) => {
        this.isCreated = true;
      },
      error: (error: ServerErrorResponse) => {
        this.isNotCreated = true;
        console.log(error);
      }
    });
  }
}
