import { AbstractControl, ValidationErrors } from '@angular/forms';

export const stringPatternValidator = (control: AbstractControl): ValidationErrors | null => {
  const pattern = /^[a-zA-Z]+$/;

  if (control.value) {
    const valueLength = control.value.trim().length;

    if (valueLength < 1) {
      return { minLength: true };
    }

    if (valueLength > 50) {
      return { maxLength: true };
    }

    if (!pattern.test(control.value)) {
      return { pattern: true };
    }
  }

  return null;
};
