import * as bcrypt from 'bcrypt';

export class PasswordUtil {
  static hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return bcrypt.hash(password, saltOrRounds);
  }

  static comparePassword(plainPassword: string, password: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, password);
  }
}
