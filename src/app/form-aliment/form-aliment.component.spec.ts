import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlimentComponent } from './form-aliment.component';

describe('FormAlimentComponent', () => {
  let component: FormAlimentComponent;
  let fixture: ComponentFixture<FormAlimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
