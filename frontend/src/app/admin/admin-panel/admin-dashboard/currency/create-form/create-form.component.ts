import { CurrencyService } from './../../../../../core/services/currency/currency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../../../../../core/interfaces/currency.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  form: FormGroup;

  constructor(private currencyService: CurrencyService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      code: ['', this.getCodeValidators()],
      exchangeRate: ['', this.getExchangeRateValidators()],
      isBase: ['', Validators.required]
    });
  }

  onCreate() {
    if (this.form.invalid) {
      return;
    }
    const currency: Currency = this.getFormValues();
    this.createCurrency(currency);
    this.form.reset();
  }

  getCodeValidators() {
    return [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern(/^[A-Za-z]$/)];
  }

  getExchangeRateValidators() {
    return [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)];
  }

  getFormValues(): Currency {
    const { code, exchangeRate, isBase } = this.form.value;
    return {
      code,
      exchangeRate: parseFloat(exchangeRate),
      isBase: isBase == 'true'
    };
  }

  createCurrency(currency: Currency) {
    this.currencyService.createCurrency(currency).subscribe(currency => {
      // do something with the created currency
    });
  }
}
