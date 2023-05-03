import { Component } from '@angular/core';
import { SupplierService } from '../../../../../core/services/supplier/supplier.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  EmailValidator,
} from '@angular/forms';

@Component({
  selector: 'app-admin-suppliers-form',
  templateUrl: './admin-suppliers-form.component.html',
  styleUrls: ['./admin-suppliers-form.component.scss'],
})
export class AdminSuppliersFormComponent {
  supplierForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.supplierForm = this.fb.group({
      companyName: ['', Validators.required],
      contactName: ['', Validators.required],
      contactTitle: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      faxNumber: ['', Validators.required],
      email: [EmailValidator, Validators.required],
    });
  }

  onSubmit() {
    const formData = this.toFormData(this.supplierForm);
    if (this.supplierForm.valid) {
      // this.supplierService.createSupplier({}).subscribe(
      // res => console.log('Created'),
      // err => console.log('Not created')
      // );
    }
    return;
  }

  toFormData(form: FormGroup) {
    const formData = new FormData();
    formData.append('companyName', form.get('companyName').value);
    formData.append('contactName', form.get('contactName').value);
    formData.append('contactTitle', form.get('contactTitle').value);
    formData.append('city', form.get('city').value);
    formData.append('region', form.get('region').value);
    formData.append('postalCode', form.get('postalCode').value);
    formData.append('country', form.get('country').value);
    formData.append('phoneNumber', form.get('phoneNumber').value);
    formData.append('faxNumber', form.get('faxNumber').value);
    formData.append('email', form.get('email').value);
    return formData;
  }
}
