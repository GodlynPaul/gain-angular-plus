import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-emp-registration',
	templateUrl: './emp-registration.component.html',
	styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {
	constructor() {}
	ngOnInit() {}

	regValidation(formControl){
		console.log(formControl);
	}
	empRegFormSave(formGroup){
		console.log(formGroup)
		console.log("Form value accessed using the formGroup: "+ formGroup.value.empreggroup.empName);
	}

}
