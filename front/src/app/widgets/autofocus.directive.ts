import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  @Input()
  appAutofocus = 'focus';

  constructor(private elt: ElementRef<HTMLElement>) {
    console.log('instantiate autofocus');
    console.log(this.elt.nativeElement);
  }

  ngOnInit(): void {
    if (this.appAutofocus === 'select') {
      if (!(this.elt.nativeElement instanceof HTMLInputElement)) {
        throw new Error('Directive must be on an input elt');
      }
      this.elt.nativeElement.select();
      return;
    }
    this.elt.nativeElement.focus();
  }
}
