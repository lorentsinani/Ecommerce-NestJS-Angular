import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-category-table',
  templateUrl: './admin-category-table.component.html',
  styleUrls: ['./admin-category-table.component.scss']
})
export class AdminCategoryTableComponent {
  entities: any = [
    {
      id: 1,
      name: 'A',
      description: 'B'
    }
  ];
}
