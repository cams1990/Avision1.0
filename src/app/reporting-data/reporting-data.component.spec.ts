import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingDataComponent } from './reporting-data.component';

describe('ReportingDataComponent', () => {
  let component: ReportingDataComponent;
  let fixture: ComponentFixture<ReportingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
