import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef) {
    console.log('Directiva llamada');

  }
  // tslint:disable-next-line: member-ordering
  @Input('appResaltado') nuevoColor: string;
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');

  }
  @HostListener('mouseout') mouseOut() {
    this.resaltar(null);
  }
  private resaltar( color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
