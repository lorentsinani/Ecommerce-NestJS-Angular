import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Delivery } from '../entities/delivery.entity';
import { IDelivery } from '../../common/interfaces/delivery.interface';
import { CreateDeliveryDto } from '../../common/dtos/delivery/create-delivery.dto';
import { UpdateDeliveryDto } from '../../common/dtos/delivery/update-delivery.dto';

@Injectable()
export class DeliveryRepository extends Repository<Delivery> {
  constructor(dataSource: DataSource) {
    super(Delivery, dataSource.createEntityManager());
  }

  createDelivery(createDeliveryDto: CreateDeliveryDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Delivery).values(createDeliveryDto).returning('*').execute();
  }

  findAllDeliveries(): Promise<Delivery[]> {
    return this.find();
  }

  findDeliveryById(id: number): Promise<Delivery | null> {
    return this.createQueryBuilder('delivery').where('id = :id', { id }).getOne();
  }

  updateDelivery(id: number, updateDeliveryDto: UpdateDeliveryDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Delivery).set(updateDeliveryDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteDelivery(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Delivery).where('id = :id', { id }).returning('*').execute();
  }
}
