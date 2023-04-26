import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Newsletter } from '../entities/newsletter.entity';
import { CreateNewsletterDto } from '../../common/dtos/newsletter/create-newsletter.dto';
import { UpdateNewsletterDto } from '../../common/dtos/newsletter/update-newsletter.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsletterRepository extends Repository<Newsletter> {
  constructor(dataSource: DataSource) {
    super(Newsletter, dataSource.createEntityManager());
  }

  subscribeToNewsletter(createNewsletterDto: CreateNewsletterDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Newsletter).values(createNewsletterDto).returning('*').execute();
  }

  findAllSubscribers(): Promise<Newsletter[]> {
    return this.find();
  }

  findSubscriberById(id: number): Promise<Newsletter | null> {
    return this.createQueryBuilder('newsletter').where('newsletter.id = :id', { id }).getOne();
  }

  findSubscriberByEmail(email: string): Promise<Newsletter | null> {
    return this.createQueryBuilder('newsletter').where('newsletter.email = :email', { email }).getOne();
  }

  updateSubscriber(id: number, updateNewsletterDto: UpdateNewsletterDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Newsletter).set(updateNewsletterDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteSubscriber(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Newsletter).where('id = :id', { id }).returning('*').execute();
  }
}
