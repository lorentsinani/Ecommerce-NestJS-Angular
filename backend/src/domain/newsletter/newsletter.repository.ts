import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Newsletter } from '../entities/newsletter.entity';
import { CreateNewsletterDto } from '../../common/dtos/newsletter/create-newsletter.dto';
import { INewsletter } from '../../common/interfaces/newsletter.interface';
import { UpdateNewsletterDto } from '../../common/dtos/newsletter/update-newsletter.dto';

export class NewsletterRepository extends Repository<Newsletter> {
  constructor(dataSource: DataSource) {
    super(Newsletter, dataSource.createEntityManager());
  }

  async subscribeToNewsletter(createNewsletterDto: CreateNewsletterDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Newsletter).values(createNewsletterDto).returning('*').execute();
  }

  async findAllSubscribers(): Promise<INewsletter[]> {
    return this.find();
  }

  async findSubscriberById(id: number): Promise<INewsletter | null> {
    return this.createQueryBuilder('newsletter').where('newsletter.id = :id', { id }).getOne();
  }

  async findSubscriberByEmail(email: string): Promise<INewsletter | null> {
    return this.createQueryBuilder('newsletter').where('newsletter.email = :email', { email }).getOne();
  }

  async updateSubscriber(id: number, updateNewsletterDto: UpdateNewsletterDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Newsletter).set(updateNewsletterDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteSubscriber(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Newsletter).where('id = :id', { id }).returning('*').execute();
  }
}
