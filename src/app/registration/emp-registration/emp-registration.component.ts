import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'emp-registration',
	templateUrl: './emp-registration.component.html',
	styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {
	constructor() { }

	ngOnInit() { }

	regValidation(formControl) {
		console.log(formControl);
	}

	empRegFormSave(empRegForm) {
		debugger
		console.log(empRegForm)
		console.log("Form value accessed using the formGroup: " + empRegForm.value.empreggroup.empName);
	}

	gender = [{ genderId: 1, genderName: "Male" }, { genderId: 2, genderName: "Female" }];
	systemPreference = [{ sysId: 1, sysName: "Desktop" }, { sysId: 2, sysName: "Laptop" }, { sysId: 3, sysName: "MobileDevice" }];
}
