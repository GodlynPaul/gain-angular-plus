/*
 * Custom validator which does not allow space in an input data
 */

import { AbstractControl,ValidationErrors } from '@angular/forms';

export class ContractEmployeeRegistrationValidator {

  static cannotContainSpace(control:AbstractControl): ValidationErrors|null{
    if((control.value as string).indexOf(' ')>=0){
      return {cannotContainSpace: true};
    }
    return null
  }
  
}
