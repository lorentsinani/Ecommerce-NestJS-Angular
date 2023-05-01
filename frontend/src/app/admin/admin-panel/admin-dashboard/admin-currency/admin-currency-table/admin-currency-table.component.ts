import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-currency-table',
  templateUrl: './admin-currency-table.component.html',
  styleUrls: ['./admin-currency-table.component.scss']
})
export class AdminCurrencyTableComponent {
  entities: any = [
    {
      id: 1,
      code: '2839AB8',
      exchangeRate: '1.01',
      isBase: 'true'
    }
  ];
}
