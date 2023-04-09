import * as bcrypt from 'bcrypt';

export class PasswordUtil {
  static hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return bcrypt.hash(password, saltOrRounds);
  }

  static comparePassword(plainPassword: string, password: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, password);
  }

  static checkPasswordStrength(password: string): boolean {
    if (!password) {
      return false;
    }
    // Check for string value
    if (typeof password !== 'string') {
      return false;
    }

    // Check for strong password criteria: at least one uppercase letter,
    // one lowercase letter, one digit, and one special character
    const strongPasswordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=\-[\]{}|;':",.<>?/~`])\S{8,}$/;
    return strongPasswordRegex.test(password);
  }
}
