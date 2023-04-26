import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {
  entities: { id?: number; name?: string; description?: string }[] = [{ id: 1, name: 'computers', description: 'i mire' }];
}
