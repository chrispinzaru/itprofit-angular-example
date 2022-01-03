import {Directive, ElementRef, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {

  @Input('zoom') set size(value: number) {
    this._size = value;
    this.renderer.setStyle(this.el.nativeElement, "font-size", `${this._size}px`);
  }
  private _size: number = 16;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {

  }


}
