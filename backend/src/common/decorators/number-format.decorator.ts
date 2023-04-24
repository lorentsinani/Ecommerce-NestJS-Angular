import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from 'class-validator';

@ValidatorConstraint({ name: 'numberFormat', async: false })
export class NumberFormatConstraint implements ValidatorConstraintInterface {
  validate(value: number, args: ValidationArguments): boolean {
    // Check for not empty value
    if (!value) {
      return false;
    }

    // Check if the value consists of one or more digits only.
    const numberFormatRegex = /^\d+(\.\d+)?$/;
    return numberFormatRegex.test(value.toString());
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be in a valid number format.`;
  }
}

export function IsNumberFormat(validationOptions?: ValidationOptions): PropertyDecorator {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: NumberFormatConstraint
    });
  };
}
