import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Objects } from '../entities/objects.entity';
import { ObjectsRepository } from './objects.repository';
import { InsertResult } from 'typeorm';
import { CreateObjectDto } from '../../common/dtos/objects/create-object.dto';
import { UpdateObjectDto } from '../../common/dtos/objects/update-object.dto';

@Injectable()
export class ObjectsService {
  private NotFoundExceptionMessage = 'Object is not found';
  private NotCreatedExceptionMessage = 'Object is not created';

  constructor(private objectsRepository: ObjectsRepository) {}

  async create(createObjectDto: CreateObjectDto): Promise<Objects> {
    const createdObject = await this.objectsRepository.createObject(createObjectDto);

    if (this.getIdentifierId(createdObject)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }
    return createdObject.raw[0];
  }

  findAll(): Promise<Objects[]> {
    return this.objectsRepository.findAllObjects();
  }

  async findById(id: number): Promise<Objects> {
    const object = await this.objectsRepository.findObjectById(id);

    if (!object) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return object;
  }

  async update(id: number, updateObjectDto: UpdateObjectDto): Promise<Objects> {
    const updatedObject = await this.objectsRepository.updateObject(id, updateObjectDto);

    if (!updatedObject.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedObject.raw[0];
  }

  async delete(id: number): Promise<Objects> {
    const deletedObject = await this.objectsRepository.deleteObject(id);

    if (!deletedObject.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedObject.raw[0];
  }

  getIdentifierId(result: InsertResult): boolean {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
