import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  implements OnInit {

  @HostBinding('style.backgroundColor')  myBackgroundColor:string;
  @HostBinding('style.fontSize') myFontSize:string;

  constructor() { }
 
  ngOnInit(){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
}

@HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
  this.myBackgroundColor = 'yellow';
  this.myFontSize = '22px';
}
@HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
  this.myBackgroundColor ='transparent';
  this.myFontSize = '14px';

}
}
