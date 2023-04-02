import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-image-carousel-item',
  templateUrl: './side-image-carousel-item.component.html',
  styleUrls: ['./side-image-carousel-item.component.scss'],
})
export class SideImageCarouselItemComponent {
  @Input() component: any;
}
