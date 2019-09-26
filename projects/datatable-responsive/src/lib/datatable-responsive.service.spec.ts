import { TestBed } from '@angular/core/testing';

import { DatatableResponsiveService } from './datatable-responsive.service';

describe('DatatableResponsiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatatableResponsiveService = TestBed.get(DatatableResponsiveService);
    expect(service).toBeTruthy();
  });
});
