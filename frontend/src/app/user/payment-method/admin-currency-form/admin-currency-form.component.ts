import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from '../../../../../core/services/currency/currency.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-admin-currency-form',
  templateUrl: './admin-currency-form.component.html',
  styleUrls: ['./admin-currency-form.component.scss'],
})
export class AdminCurrencyFormComponent {
  currencyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.currencyForm = this.fb.group({
      code: ['', Validators.required],
      exchangeRate: [DecimalPipe, Validators.required],
      isBase: [Boolean, Validators.required],
    });
  }

  onSubmit() {
    const formData = this.toFormData(this.currencyForm);
    if (this.currencyForm.valid) {
      // this.currencyService.createCurrency({}).subscribe(
      // res => console.log('Created'),
      // err => console.log('Not created')
      // );
    }
    return;
  }

  toFormData(form: FormGroup) {
    const formData = new FormData();
    formData.append('code', form.get('code').value);
    formData.append('exchangeRate', form.get('exchangeRate').value);
    formData.append('isBase', form.get('isBase').value);
    return formData;
  }
}
