import { Inject, Injectable } from '@nestjs/common';
import { Transporter } from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';
import { IAppConfig, appConfig } from '../../config/app-config';

@Injectable()
export class MailerService {
  private readonly transporter: Transporter;
  private appConfig: IAppConfig;

  constructor(@Inject('MAILER_PROVIDER') transporter: Transporter, private configService: ConfigService) {
    this.transporter = transporter;
    this.appConfig = this.configService.get('app') as IAppConfig;
  }

  async sendMail(to: string, subject: string, template: string, context: Record<string, any>): Promise<void> {
    const html = await this.renderTemplate(template, context);

    await this.transporter.sendMail({
      to,
      subject,
      html
    });
  }

  async sendVerificationEmail(email: string, verificationToken: string): Promise<void> {
    const subject = 'Verify your account';
    const template = 'verification-email';
    const verificationLink = `http://localhost:${this.appConfig.port}/auth/verify-account?verify_token=${verificationToken}`;

    await this.sendMail(email, subject, template, { verificationLink });
  }

  async sendResetPasswordEmail(email: string, resetPasswordToken: string): Promise<void> {
    await this.transporter.sendMail({
      to: email,
      subject: 'Reset Password',
      text: `Please click on the following link to reset your password: http://localhost:${this.appConfig.port}/auth/reset-password?reset_token=${resetPasswordToken}`
    });
  }

  private async renderTemplate(template: string, context: Record<string, any>): Promise<string> {
    const templateContent = await fs.promises.readFile(`src/domain/mailer/templates/${template}.hbs`, 'utf-8');
    const compiledTemplate = handlebars.compile(templateContent);
    return compiledTemplate(context);
  }
}
