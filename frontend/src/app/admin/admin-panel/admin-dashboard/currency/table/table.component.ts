import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../../../core/services/currency/currency.service';
import { Currency } from '../../../../../core/interfaces/currency.interface';
import { capitalize } from '../../../../../core/utilities/capitalize-props.unit';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  currencies: Currency[] = [];
  columns: string[] = [];
  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.getAllCurrencies();
  }

  getAllCurrencies() {
    this.currencyService.getAllCurrencies().subscribe(currencies => {
      this.currencies = currencies;
      this.getColumns();
    });
  }

  getColumns() {
    this.columns = Object.keys(this.currencies[0]).map(prop =>
      capitalize(prop)
    );
  }

  deleteCurrency(id: number) {
    this.currencyService.deleteCurrency(id).subscribe(currency => {
      // do something with the deleted currencies
      this.currencies = this.currencies.filter(el => el.id !== id);
    });
  }
}
