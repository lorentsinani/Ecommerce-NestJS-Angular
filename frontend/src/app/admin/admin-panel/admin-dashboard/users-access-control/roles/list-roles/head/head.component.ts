import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-roles-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class ListRolesHeadComponent {
  @Input() column: string;
}
