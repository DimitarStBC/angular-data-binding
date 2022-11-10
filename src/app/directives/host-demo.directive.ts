import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHostDemo]'
})
export class HostDemoDirective {

  constructor() { }

  @HostBinding('style.border') border: string = '';

  @HostListener('mouseover')
  onMouseOver() {
    this.border = '10px solid #125699';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.border = '';
  }

}
