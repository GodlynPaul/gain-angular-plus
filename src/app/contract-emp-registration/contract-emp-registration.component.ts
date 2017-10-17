import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contract-emp-registration',
  templateUrl: './contract-emp-registration.component.html',
  styleUrls: ['./contract-emp-registration.component.css']
})
export class ContractEmpRegistrationComponent implements OnInit {

  constructor(){}
  ngOnInit(){}

  contactEmployee = new FormGroup({
    conEmpName : new FormControl('',Validators.required),
    conEmpSector : new FormControl('',[Validators.required, Validators.minLength(3)]),
    conCompany : new FormControl('',[Validators.required, Validators.minLength(3)]),
    // conEmpMobile : new FormControl('',MobileNumberValidators.cannotContainMinus)
    conEmpMobile : new FormControl('',Validators.required)
  });
  get gConEmpName(){
    return this.contactEmployee.get('conEmpName');
  };
  get gConCompany(){
    return this.contactEmployee.get('conCompany');
  };
  get gConEmpMobile(){
    return this.contactEmployee.get('conEmpMobile');
  }
}
