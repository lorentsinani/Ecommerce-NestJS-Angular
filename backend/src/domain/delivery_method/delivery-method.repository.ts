import { UpdateDeliveryMethodDto } from './../../common/dtos/delivery-method/update-delivery-method.dto';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { DeliveryMethod } from '../entities/delivery-method.entity';
import { CreateDeliveryMethodDto } from '../../common/dtos/delivery-method/create-delivery-method.dto';
import { Injectable } from '@nestjs/common';


@Injectable()
export class DeliveryMethodRepository extends Repository<DeliveryMethod> {
  constructor(dataSource: DataSource) {
    super(DeliveryMethod, dataSource.createEntityManager());
  }

  createDeliveryMethod(createDeliveryMethodDto: CreateDeliveryMethodDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(DeliveryMethod).values(createDeliveryMethodDto).returning('*').execute();
  }

  findAllDeliveryMethods(): Promise<DeliveryMethod[]> {
    return this.find();
  }

  findDeliveryMethodById(id: number): Promise<DeliveryMethod | null> {
    return this.createQueryBuilder('delivery_method').where('id = :id', { id }).getOne();
  }

  updateDeliveryMethod(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(DeliveryMethod).set(updateDeliveryMethodDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteDeliveryMethod(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(DeliveryMethod).where('id = :id', { id }).returning('*').execute();
  }
}
