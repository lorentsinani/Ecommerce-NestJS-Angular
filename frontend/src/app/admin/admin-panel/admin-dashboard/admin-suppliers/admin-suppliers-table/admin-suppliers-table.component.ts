import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-suppliers-table',
  templateUrl: './admin-suppliers-table.component.html',
  styleUrls: ['./admin-suppliers-table.component.scss'],
})
export class AdminSuppliersTableComponent {
  entities: any = [
    {
      id: 1,
      companyName: 'Kingston',
      contactName: 'HyperX',
      contactTitle: 'Supervisor',
      address: 'Singapore, str. Lorent Sinani',
      city: 'Singapore',
      region: 'Australia',
      postalCode: '-',
      country: 'Australia',
      phoneNumber: '+65	1234 5678',
      faxNumber: '-',
      email: 'kingston@supplier.com',
    },
  ];
}
