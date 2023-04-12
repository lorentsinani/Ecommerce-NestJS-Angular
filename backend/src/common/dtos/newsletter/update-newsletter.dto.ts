import { IsOptional } from "class-validator";
import { IsCustomEmail } from "../../decorators/email-format.decorator";

export class UpdateNewsletterDto {
    @IsCustomEmail()
    @IsOptional()
    email: string;
}