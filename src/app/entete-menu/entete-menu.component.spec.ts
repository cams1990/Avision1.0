import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteMenuComponent } from './entete-menu.component';

describe('EnteteMenuComponent', () => {
  let component: EnteteMenuComponent;
  let fixture: ComponentFixture<EnteteMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteteMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
