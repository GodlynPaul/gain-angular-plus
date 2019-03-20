import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationRoutes } from './registration.route';

import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { ContractEmpRegistrationComponent } from './contract-emp-registration/contract-emp-registration.component';
import { SecurityEmpRegistrationComponent } from './security-emp-registration/security-emp-registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutes
  ],
  declarations: [
    EmpRegistrationComponent,
    ContractEmpRegistrationComponent,
    SecurityEmpRegistrationComponent
  ],
  exports: [
    EmpRegistrationComponent,
    ContractEmpRegistrationComponent,
    SecurityEmpRegistrationComponent
  ]
})

export class RegistrationModule { }
