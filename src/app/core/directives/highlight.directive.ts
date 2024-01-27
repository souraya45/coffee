import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef) {

    eleRef.nativeElement.style.background = '';

   }
   @HostListener('mouseenter') onMouseEnter() {
    this.eleRef.nativeElement.style.background = 'red';

   }

   @HostListener('mouseleave') onMouseLeave() {
    setTimeout(()=>{
      this.eleRef.nativeElement.style.background = 'green';

    }
    ), 5000

   }


}
