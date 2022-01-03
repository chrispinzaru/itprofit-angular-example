import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrefChildComponent } from './viewref-child.component';

describe('ViewrefChildComponent', () => {
  let component: ViewrefChildComponent;
  let fixture: ComponentFixture<ViewrefChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrefChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
