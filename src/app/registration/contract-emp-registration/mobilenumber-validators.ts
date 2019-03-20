import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MobileNumberValidators {
  static cannotContainMinus(control:AbstractControl): ValidationErrors|null{
    if((control.value as string).indexOf('-') >= 0 ){
      return { cannotContainMinus : true};
    }
    return null;
  }
}
