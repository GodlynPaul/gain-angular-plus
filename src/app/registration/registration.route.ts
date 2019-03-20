import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { ContractEmpRegistrationComponent } from './contract-emp-registration/contract-emp-registration.component';
import { SecurityEmpRegistrationComponent } from './security-emp-registration/security-emp-registration.component';

const REGISTRATION_ROUTE: Routes = [
  {
    path: '',
    redirectTo: 'security-registration',
    pathMatch: 'full'
  },
  {
    path: 'register/employee-registration',
    component: EmpRegistrationComponent
  },
  {
    path: 'contract-registration',
    component: ContractEmpRegistrationComponent
  },
  {
    path: 'security-registration',
    component: SecurityEmpRegistrationComponent
  },
];

export const RegistrationRoutes: ModuleWithProviders = RouterModule.forChild(REGISTRATION_ROUTE) 