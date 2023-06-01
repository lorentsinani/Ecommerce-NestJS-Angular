import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-roles-permissions-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class ListRolesPermissionsHeadComponent {
  @Input() column: string;
}
