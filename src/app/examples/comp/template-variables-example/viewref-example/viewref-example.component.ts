import {Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {ViewrefChildComponent} from "../viewref-child/viewref-child.component";

@Component({
  selector: 'app-viewref-example',
  templateUrl: './viewref-example.component.html',
  styleUrls: ['./viewref-example.component.scss']
})
export class ViewrefExampleComponent implements OnInit {

  @ViewChild('greetingTemplate') greetingTemplateRef: TemplateRef<any>;
  @ViewChild('title') titleRef: ElementRef<any>;

  @ViewChild(ViewrefChildComponent) viewrefChild: ViewrefChildComponent;

  @ViewChildren(ViewrefChildComponent) viewrefChildren: QueryList<ViewrefChildComponent>;

  constructor(
    private elementRef: ElementRef,
  ) {
    // @ts-ignore
    window.foo = this;
  }

  ngOnInit(): void {
  }

  public incrementCounter() {
    this.viewrefChild.increment();
  }
}
