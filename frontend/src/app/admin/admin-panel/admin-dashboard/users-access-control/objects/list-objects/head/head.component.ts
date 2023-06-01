import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-objects-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class ListObjectsHeadComponent {
  @Input() column: string;
}
