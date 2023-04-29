import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-table-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  @Input() column: string;
}
