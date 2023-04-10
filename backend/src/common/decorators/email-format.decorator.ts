import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

@ValidatorConstraint({ name: 'emailFormat', async: false })
export class EmailFormatConstraint implements ValidatorConstraintInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(email: string, args: ValidationArguments): boolean {
    // Check for not empty value
    if (!email) {
      return false;
    }

    // Check for string value
    if (typeof email !== 'string') {
      return false;
    }

    // Check for email length
    if (email.length > 100) {
      return false;
    }

    // Check for email format using regex
    const emailFormatRegex =
      /^[a-zA-Z][a-zA-Z0-9_]*[a-zA-Z0-9]+(_[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
    return emailFormatRegex.test(email);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultMessage(args: ValidationArguments): string {
    return `The email must be a valid email format and cannot be empty.`;
  }
}

export function IsCustomEmail(validationOptions?: ValidationOptions): PropertyDecorator {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      name: 'isCustomEmail',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: EmailFormatConstraint
    });
  };
}
