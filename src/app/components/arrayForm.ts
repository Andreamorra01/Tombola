import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

export function myFormArray() {
  //const validator = new ValidatorsService;
  return new FormBuilder().group({
    name:new FormArray([
      new FormControl("",[Validators.required, Validators.minLength(3)]),
    ])
  });
}
