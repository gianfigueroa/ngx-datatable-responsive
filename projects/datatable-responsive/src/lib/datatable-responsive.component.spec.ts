import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableResponsiveComponent } from './datatable-responsive.component';

describe('DatatableResponsiveComponent', () => {
  let component: DatatableResponsiveComponent;
  let fixture: ComponentFixture<DatatableResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
