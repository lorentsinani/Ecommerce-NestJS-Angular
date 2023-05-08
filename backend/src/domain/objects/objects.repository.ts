import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Objects } from '../entities/objects.entity';

@Injectable()
export class ObjectsRepository extends Repository<Objects> {
  constructor(dataSource: DataSource) {
    super(Objects, dataSource.createEntityManager());
  }

  createObject(createObjectDto: CreateObjectDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Objects).values(createObjectDto).returning('*').execute();
  }

  findAllObjects(): Promise<Objects[]> {
    return this.find();
  }

  findObjectById(id: number): Promise<Objects | null> {
    return this.createQueryBuilder('objects').where('objects.id = :id', { id }).getOne();
  }

  updateObject(id: number, updateObjectDto: UpdateObjectDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Objects).set(updateObjectDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteObject(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Objects).where('id = :id', { id }).returning('*').execute();
  }
}
