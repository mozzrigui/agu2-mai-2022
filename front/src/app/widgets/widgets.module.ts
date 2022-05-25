import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EllipsisPipe } from './ellipsis.pipe';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [EllipsisPipe, AutofocusDirective],
  imports: [CommonModule],
  exports: [EllipsisPipe, AutofocusDirective],
})
export class WidgetsModule {}
