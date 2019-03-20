/*
 * Reactive Forms using Form Builder
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'security-emp-registration',
  templateUrl: './security-emp-registration.component.html',
  styleUrls: ['./security-emp-registration.component.css']
})
export class SecurityEmpRegistrationComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  submitRegistration() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('SUCCESS : ' + JSON.stringify(this.registerForm.value,undefined,2))
    }
    if (this.registerForm.invalid) {
      alert('Invalid data');
      return;
    }
  }
}
