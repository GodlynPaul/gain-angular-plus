import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ContractEmployeeRegistrationValidator } from './contract-emp-registration.validators'

@Component({
  selector: 'contract-emp-registration',
  templateUrl: './contract-emp-registration.component.html',
  styleUrls: ['./contract-emp-registration.component.css']
})
export class ContractEmpRegistrationComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  contactEmployee = new FormGroup({
    conEmpName: new FormControl('', Validators.required),
    conEmpSector: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    conCompany: new FormControl('JXP', [Validators.required, Validators.minLength(3), ContractEmployeeRegistrationValidator.cannotContainSpace]),
    conContacts: new FormGroup({
      conEmpMobile: new FormControl('', Validators.required),
      conEmpEmergency: new FormControl('', Validators.required)
    }),
    conSkillset: new FormArray([],Validators.required)
  });

  get gConEmpName() {
    return this.contactEmployee.get('conEmpName');
  };
  get gConCompany() {
    return this.contactEmployee.get('conCompany');
  };
  get gConEmpMobile() {
    return this.contactEmployee.get('conContacts.conEmpMobile');
  }
  get gConEmpEmergency() {
    return this.contactEmployee.get('conContacts.conEmpEmergency');
  }
  get gConSkillset() {
    return this.contactEmployee.get('conSkillset');
  }

  /* If validation is performed in backend then we need to set error in Form */
  registerContractEmployee() {
    let submittedFromValue = this.contactEmployee.value;
    alert(JSON.stringify(submittedFromValue, undefined, 2));
    //Assume an http call happen over here and response recived validation error from backend
    this.contactEmployee.setErrors({
      customValidationErrFromServer: true
    })
  }

  addSkillset(skillset: HTMLInputElement) {
    if(skillset.value){
      (this.contactEmployee.get('conSkillset') as FormArray).push(new FormControl(skillset.value))
    }
  }
  removeSkillset(skillset:FormControl){
    let index = (this.contactEmployee.get('conSkillset') as FormArray).controls.indexOf(skillset);
    (this.contactEmployee.get('conSkillset') as FormArray).removeAt(index);
  }
}
