import { TestBed } from '@angular/core/testing';

import { NgxTreeviewSelectService } from './ngx-treeview-select.service';

describe('NgxTreeviewSelectService', () => {
  let service: NgxTreeviewSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTreeviewSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
