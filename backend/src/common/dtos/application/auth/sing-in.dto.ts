import { IsNotEmpty, IsString, Length } from 'class-validator';
import { IsCustomEmail } from '../../../decorators/email-format.decorator';

export class SignInDto {
  @IsCustomEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  password: string;
}
