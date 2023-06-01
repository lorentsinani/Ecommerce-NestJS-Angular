import { Injectable } from '@nestjs/common';
import { Producer } from '../entities/producer.entity';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateProducerDto } from '../../common/dtos/producer/create-producer.dto';
import { UpdateProducerDto } from '../../common/dtos/producer/update-producer.dto';

@Injectable()
export class ProducerRepository extends Repository<Producer> {
  constructor(dataSource: DataSource) {
    super(Producer, dataSource.createEntityManager());
  }

  createProducer(createProducerDto: CreateProducerDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Producer).values(createProducerDto).returning('*').execute();
  }

  findAllProducer(): Promise<Producer[]> {
    return this.find();
  }

  findProducerById(id: number): Promise<Producer | null> {
    return this.createQueryBuilder('producer').where('id = :id', { id }).getOne();
  }

  updateProducer(id: number, updateProducerDto: UpdateProducerDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Producer).set(updateProducerDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteProducer(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Producer).where('id = :id', { id }).returning('*').execute();
  }
}
