import { FormControl, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms'

export class emailValidator{
    static mustHaveAt(control: FormControl): ValidationErrors | null{
      if(control.value){
        if(control.value.indexOf('@') < 0 && 0!== control.value.length)
          return {mustHaveAt: true};
        return null;
      }
    }
}