import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NewsletterRepository } from './newsletter.repository';
import { CreateNewsletterDto } from '../../common/dtos/newsletter/create-newsletter.dto';
import { UpdateNewsletterDto } from '../../common/dtos/newsletter/update-newsletter.dto';
import { Newsletter } from '../entities/newsletter.entity';
import { InsertResult } from 'typeorm';

@Injectable()
export class NewsletterService {
  private NotCreatedExceptionMessage = 'Subscriber is not created';
  private NotFoundExceptionMessage = 'Subscriber not found';
  constructor(private newsletterRepository: NewsletterRepository) {}

  async create(createNewsletterDto: CreateNewsletterDto): Promise<Newsletter> {
    const subscribedNewsletter = await this.newsletterRepository.subscribeToNewsletter(createNewsletterDto);

    if (!this.getIdentifierId(subscribedNewsletter)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return subscribedNewsletter.raw[0];
  }

  findAll(): Promise<Newsletter[]> {
    return this.newsletterRepository.findAllSubscribers();
  }

  async findById(id: number): Promise<Newsletter> {
    const subscriberExist = await this.newsletterRepository.findSubscriberById(id);

    if (!subscriberExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return subscriberExist;
  }

  async findByEmail(email: string): Promise<Newsletter> {
    const subscriberExist = await this.newsletterRepository.findSubscriberByEmail(email);

    if (!subscriberExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return subscriberExist;
  }

  async update(id: number, createNewsletterDto: UpdateNewsletterDto): Promise<Newsletter> {
    const updatedSubscriber = await this.newsletterRepository.updateSubscriber(id, createNewsletterDto);

    if (!updatedSubscriber.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedSubscriber.raw[0];
  }

  async delete(id: number): Promise<Newsletter> {
    const deletedSubscriber = await this.newsletterRepository.deleteSubscriber(id);

    if (!deletedSubscriber.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedSubscriber.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
