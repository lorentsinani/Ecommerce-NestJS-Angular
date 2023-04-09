import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

@ValidatorConstraint({ name: 'dateFormat', async: false })
export class DateFormatConstraint implements ValidatorConstraintInterface {
  validate(date: string, args: ValidationArguments): boolean {
    // Check for not empty value
    if (!date) {
      return false;
    }

    // Check for string value
    if (typeof date !== 'string') {
      return false;
    }

    // Check for date format "mm/dd/yyyy" using regex
    const dateFormatRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
    return dateFormatRegex.test(date);
  }

  defaultMessage(args: ValidationArguments): string {
    return `The date must be in the format "mm/dd/yyyy" and cannot be empty.`;
  }
}

export function IsDateFormat(validationOptions?: ValidationOptions): PropertyDecorator {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      name: 'isDateFormat',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: DateFormatConstraint
    });
  };
}
