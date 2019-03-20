import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractEmpRegistrationComponent } from './contract-emp-registration.component';

describe('ContractEmpRegistrationComponent', () => {
  let component: ContractEmpRegistrationComponent;
  let fixture: ComponentFixture<ContractEmpRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractEmpRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractEmpRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
