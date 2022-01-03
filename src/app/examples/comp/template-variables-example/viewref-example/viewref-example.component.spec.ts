import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrefExampleComponent } from './viewref-example.component';

describe('ViewrefExampleComponent', () => {
  let component: ViewrefExampleComponent;
  let fixture: ComponentFixture<ViewrefExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrefExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrefExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
