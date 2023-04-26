import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularPaginatorPipe } from './pipes/paginator.pipe';
import { AngularPaginatorDirective } from './directives/paginator.directive';
import { AngularPaginatorService } from './services/paginator.service';

@NgModule({
  imports: [CommonModule],
  providers: [AngularPaginatorService],
  declarations: [AngularPaginatorPipe, AngularPaginatorDirective],
  exports: [AngularPaginatorDirective, AngularPaginatorPipe],
})
export class AngularPaginatorModule {}
