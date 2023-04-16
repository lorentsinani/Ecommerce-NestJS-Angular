import { Inject, Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';

@Injectable()
export class MailerService {
  private readonly transporter: Transporter;

  constructor(@Inject('MAILER_PROVIDER') transporter: Transporter) {
    this.transporter = transporter;
  }

  async sendMail(to: string, subject: string, template: string, context: Record<string, any>): Promise<void> {
    const html = await this.renderTemplate(template, context);

    await this.transporter.sendMail({
      to,
      subject,
      html
    });
  }

  private async renderTemplate(template: string, context: Record<string, any>): Promise<string> {
    const templateContent = await fs.promises.readFile(`src/domain/mailer/templates/${template}.hbs`, 'utf-8');
    const compiledTemplate = handlebars.compile(templateContent);
    return compiledTemplate(context);
  }
}
