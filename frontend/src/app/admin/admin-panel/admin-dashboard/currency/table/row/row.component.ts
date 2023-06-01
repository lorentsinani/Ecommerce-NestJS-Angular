import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../../../../../core/interfaces/currency.interface';

@Component({
  selector: 'app-currency-table-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {
  @Input() currency: Currency;
  @Output() onDeleteCurrency: EventEmitter<number> = new EventEmitter();

  onDeleteAction(id: number) {
    this.onDeleteCurrency.emit(id);
  }
}
