import { IsCustomEmail } from "../../decorators/email-format.decorator";

export class CreateNewsletterDto {
    @IsCustomEmail()
    email: string;
}