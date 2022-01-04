import {Directive, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUserVisible]'
})
export class UserVisibleDirective implements OnInit {

  private embeddedViewRef: EmbeddedViewRef<any>;

  @Input()
  public set appUserVisible(value: boolean) {
    this._blockIsVisible = value;

    if (this._blockIsVisible) {
      this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!this._blockIsVisible) {
      this.viewContainer.remove(this.viewContainer.indexOf(this.embeddedViewRef));
    }
  }
  private _blockIsVisible: boolean = false;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {

  }
}
