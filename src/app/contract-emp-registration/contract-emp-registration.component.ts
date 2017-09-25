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
    conEmpName : new FormControl(),
    conEmpSector : new FormControl()
  })

}
