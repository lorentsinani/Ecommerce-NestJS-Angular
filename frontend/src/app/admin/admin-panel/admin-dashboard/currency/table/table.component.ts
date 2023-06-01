import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../../../core/services/currency/currency.service';
import { Currency } from '../../../../../core/interfaces/currency.interface';
import { capitalize } from '../../../../../core/utilities/capitalize-props.util';
import { getObjectColumns } from '../../../../../core/utilities/object-columns.util';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  emptyData: boolean = false;
  currencies: Currency[] = [];
  columns: string[] = [];
  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.getAllCurrencies();
  }

  getAllCurrencies() {
    this.currencyService.getAllCurrencies().subscribe(currencies => {
      if (currencies.length) {
        this.currencies = currencies;
        this.columns = getObjectColumns(this.currencies);
      }
      this.emptyData = true;
    });
  }

  deleteCurrency(id: number) {
    this.currencyService.deleteCurrency(id).subscribe(currency => {
      // do something with the deleted currencies
      this.currencies = this.currencies.filter(el => el.id !== id);
    });
  }
}
