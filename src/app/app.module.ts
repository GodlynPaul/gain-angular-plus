import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
// import { ContractEmpRegistrationComponent } from './contract-emp-registration/contract-emp-registration.component';
// import { SecurityEmpRegistrationComponent } from './security-emp-registration/security-emp-registration.component';
import { RegistrationModule } from './registration/registration.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MainRoutes } from './routes';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		// EmpRegistrationComponent,
		// ContractEmpRegistrationComponent,
		// SecurityEmpRegistrationComponent,
		PageNotFoundComponent,
		LoginComponent
	],
	imports: [
		RegistrationModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		// RouterModule.forRoot(MainRoutes)
		MainRoutes
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
