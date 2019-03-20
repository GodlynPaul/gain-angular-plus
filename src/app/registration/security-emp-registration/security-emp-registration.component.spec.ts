import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityEmpRegistrationComponent } from './security-emp-registration.component';

describe('SecurityEmpRegistrationComponent', () => {
  let component: SecurityEmpRegistrationComponent;
  let fixture: ComponentFixture<SecurityEmpRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityEmpRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityEmpRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
