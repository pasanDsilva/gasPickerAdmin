import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaccComponent } from './newacc.component';

describe('NewaccComponent', () => {
  let component: NewaccComponent;
  let fixture: ComponentFixture<NewaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
