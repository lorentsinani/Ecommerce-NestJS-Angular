import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-image-carousel',
  templateUrl: './side-image-carousel.component.html',
  styleUrls: ['./side-image-carousel.component.scss'],
})
export class SideImageCarouselComponent {
  components = ['component1', 'component2'];
}
