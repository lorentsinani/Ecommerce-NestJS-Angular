import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-producer-table',
  templateUrl: './admin-producer-table.component.html',
  styleUrls: ['./admin-producer-table.component.scss'],
})
export class AdminProducerTableComponent {
  entities: any = [
    {
      id: 1,
      name: 'HyperX',
      country: 'Singapore',
      establishedYear: 2002,
      contactEmail: 'hyperx@kingston.com',
    },
  ];
}
