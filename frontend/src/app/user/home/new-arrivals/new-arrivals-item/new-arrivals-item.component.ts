import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-arrivals-item',
  templateUrl: './new-arrivals-item.component.html',
  styleUrls: ['./new-arrivals-item.component.scss'],
})
export class NewArrivalsItemComponent {
  @Input() arrival: any;
}
