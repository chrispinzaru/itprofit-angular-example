import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersExampleComponent } from './users-example.component';

describe('UsersExampleComponent', () => {
  let component: UsersExampleComponent;
  let fixture: ComponentFixture<UsersExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
