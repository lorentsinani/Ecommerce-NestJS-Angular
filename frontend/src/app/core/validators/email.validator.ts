import { AbstractControl, ValidationErrors } from '@angular/forms';

export const emailValidator = (control: AbstractControl): ValidationErrors | null => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (control.value) {
    const valueLength = control.value.trim().length;

    if (valueLength > 100) {
      return { maxLength: true };
    }

    if (!pattern.test(control.value)) {
      return { pattern: true };
    }
  }

  return null;
};
