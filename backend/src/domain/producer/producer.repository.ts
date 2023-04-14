import { Injectable } from '@nestjs/common';
import { Producer } from '../entities/producer.entity';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateProducerDto } from '../../common/dtos/producer/create-producer.dto';
import { IProducer } from '../../common/interfaces/producer.interface';
import { UpdateProducerDto } from '../../common/dtos/producer/update-producer.dto';

@Injectable()
export class ProducerRepository extends Repository<Producer> {
  constructor(dataSource: DataSource) {
    super(Producer, dataSource.createEntityManager());
  }

  async createProducer(createProducerDto: CreateProducerDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Producer).values(createProducerDto).returning('*').execute();
  }

  async findAllProducer(): Promise<IProducer[]> {
    return this.find();
  }

  async findProducerById(id: number): Promise<IProducer | null> {
    return this.createQueryBuilder('producer').where('id = :id', { id }).getOne();
  }

  async updateProducer(id: number, updateProducerDto: UpdateProducerDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Producer).set(updateProducerDto).where('id = :id', { id }).returning('*').execute();
  }

  async deleteProducer(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Producer).where('id = :id', { id }).returning('*').execute();
  }
}
