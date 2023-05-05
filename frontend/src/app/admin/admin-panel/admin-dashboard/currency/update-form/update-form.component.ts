import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from '../../../../../core/services/currency/currency.service';
import { Currency } from '../../../../../core/interfaces/currency.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private currencyService: CurrencyService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {}

  onUpdate() {
    /*  
    if(this.form.invalid) return;

    const currency = this.getFormData();

    this.onUpdateCurrency.emit(currency);

    this.form.reset(); 
    */
  }

  /*
    initForm()....
  */

  /* 
    createFormGroup()...
  */

  /*
    getValidations()...
  */
}
