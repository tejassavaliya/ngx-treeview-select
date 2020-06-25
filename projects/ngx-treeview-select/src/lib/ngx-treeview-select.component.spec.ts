import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTreeviewSelectComponent } from './ngx-treeview-select.component';

describe('NgxTreeviewSelectComponent', () => {
  let component: NgxTreeviewSelectComponent;
  let fixture: ComponentFixture<NgxTreeviewSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTreeviewSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTreeviewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
