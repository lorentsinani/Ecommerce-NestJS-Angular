import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Order } from '../../../../../core/interfaces/orders.interface';
import { OrdersService } from '../../../../../core/services/orders/orders.service';
import { Currency } from '../../../../../core/interfaces/currency.interface';
import { User } from '../../../../../core/interfaces/user.interface';
import { Address } from '../../../../../core/interfaces/address.interface';
import { AddressService } from '../../../../../core/services/address/address.service';
import { UsersService } from '../../../../../core/services/users/users.service';
import { CurrencyService } from '../../../../../core/services/currency/currency.service';
import { Employee } from '../../../../../core/interfaces/employee.interface';
import { EmployeeService } from '../../../../../core/services/employee/employee.service';
import { Role } from '../../../../../core/interfaces/role.interface';
import { RoleService } from '../../../../../core/services/role/role.service';
import { OrdersStatusService } from '../../../../../core/services/orders/orders-status.service';
import { OrdersStatus } from '../../../../../core/interfaces/order-status.interface';
import { ServerErrorResponse } from '../../../../../core/interfaces/http-error-response.interface';
@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {
  form: FormGroup;
  orders: Order[];
  currency: Currency[];
  customers: User[];
  employee: Employee[];
  address: Address[];
  roles: Role[];
  orderStatus: OrdersStatus[];
  showTable: boolean = false;
  isCreated: boolean;
  isNotCreated: boolean;
  constructor(
    private ordersService: OrdersService,
    private fb: FormBuilder,
    private addressService: AddressService,
    private userService: UsersService,
    private currencyService: CurrencyService,
    private employeeService: EmployeeService,
    private roleService: RoleService,
    private orderStatusService: OrdersStatusService
  ) {}
  ngOnInit(): void {
    this.createForm();
    this.getAllAddresses();
    this.getAllCustomers();
    this.getAllOrders();
    this.getAllEmployees();
    this.getAllCurrencies();
    this.getAllOrderStatus();
  }

  createForm() {
    this.form = this.fb.group({
      orderCode: ['', Validators.required],
      customerId: ['', Validators.required],
      orderComment: ['', Validators.required],
      currencyId: ['', Validators.required],
      employeeId: ['', Validators.required],
      orderStatusId: ['', Validators.required],
      addressId: ['', Validators.required],
      orderDate: ['', Validators.required],
      totalAmountWithVat: ['', Validators.required],
      totalAmountWithoutVat: ['', Validators.required],
      vat: ['', Validators.required]
    });
  }

  onCreate() {
    if (this.form.invalid) {
      return;
    }
    console.log('onCreate() function called');
    const order = this.form.getRawValue();
    this.createOrder(order);
    this.form.reset();
  }

  createOrder(order: Order) {
    this.ordersService.createOrder(order).subscribe({
      next: (createdOrder: Order) => {
        this.isCreated = true;
      },
      error: (error: ServerErrorResponse) => {
        this.isNotCreated = true;
        console.log(error);
      }
    });
    // Handle the created order response
  }
  toggleTable() {
    this.showTable = !this.showTable;
  }
  deleteOrder(id: number) {
    this.ordersService.deleteOrder(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== id);
    });
  }
  getAllOrders() {
    this.ordersService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    });
  }
  getAllAddresses() {
    this.addressService.getAllAddresses().subscribe(address => {
      this.address = address;
    });
  }
  getAllCurrencies() {
    this.currencyService.getAllCurrencies().subscribe(currency => {
      this.currency = currency;
    });
  }
  getAllCustomers() {
    this.roleService.getAllRoles().subscribe(roles => {
      this.roles = roles;
      console.log(roles);

      this.userService.getAllUsers().subscribe(users => {
        this.customers = users.filter(user => {
          const customerRole = this.roles.find(role => role.name === 'customer');
          return user.roleId === customerRole?.id;
        });
      });
    });
  }

  getAllOrderStatus() {
    this.orderStatusService.getAllOrdersStatus().subscribe(orderStatus => {
      this.orderStatus = orderStatus;
    });
  }
  getAllEmployees() {
    this.employeeService.getAllEmployee().subscribe(employee => {
      this.employee = employee;
    });
  }
}
