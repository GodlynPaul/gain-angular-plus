import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { ContractEmpRegistrationComponent } from './contract-emp-registration/contract-emp-registration.component';
// import { MobileNumberValidators } from './contract-emp-registration/mobilenumber-validators'

@NgModule({
	declarations: [
		AppComponent,
		EmpRegistrationComponent,
		ContractEmpRegistrationComponent
		// MobileNumberValidators
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
