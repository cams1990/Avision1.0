import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectReportingComponent } from './redirect-reporting.component';

describe('RedirectReportingComponent', () => {
  let component: RedirectReportingComponent;
  let fixture: ComponentFixture<RedirectReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
