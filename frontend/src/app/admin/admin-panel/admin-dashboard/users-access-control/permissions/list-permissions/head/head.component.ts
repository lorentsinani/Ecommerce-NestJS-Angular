import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-permissions-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class ListPermissionsHeadComponent {
  @Input() column: string;
}
