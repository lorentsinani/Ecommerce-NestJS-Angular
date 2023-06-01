import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordValidator = (control: AbstractControl): ValidationErrors | null => {
  const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  if (control.value) {
    const valueLength = control.value.trim().length;

    if (valueLength > 255) {
      return { maxLength: true };
    }

    if (!pattern.test(control.value)) {
      return { pattern: true };
    }
  }
  return null;
};
