import { FormBuilder, Validators, FormControl } from '@angular/forms';

export function createGiocatori() {
  return new FormBuilder().group({
    name : new FormBuilder().array([
      new FormControl('', Validators.required)
    ])
  })
}
