import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class ResetPasswordDto {
  @IsCustomEmail()
  email: string;
}
