import { UpdateDeliveryMethodDto } from './../../common/dtos/delivery-method/update-delivery-method.dto';
import { CreateDeliveryMethodDto } from './../../common/dtos/delivery-method/create-delivery-method.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeliveryMethodRepository } from './delivery-method.repository';
import { DeliveryMethod } from '../entities/delivery-method.entity';
import { InsertResult } from 'typeorm';

@Injectable()
export class DeliveryMethodService {
  private NotCreateExceptionMessage = 'Delivery Method is not created';
  private NotFoundExceptionMessage = 'Delivery Method is not found';
  constructor(private readonly deliveryMethodRepository: DeliveryMethodRepository) {}

  async create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    const createdDeliveryMethod = await this.deliveryMethodRepository.createDeliveryMethod(createDeliveryMethodDto);

    if (!this.getIdentifierId(createdDeliveryMethod)) {
      throw new HttpException(this.NotCreateExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdDeliveryMethod.raw[0];
  }

  async findAll(): Promise<DeliveryMethod[]> {
    return this.deliveryMethodRepository.findAllDeliveryMethods();
  }

  async findById(id: number): Promise<DeliveryMethod> {
    const deliveryMethodExist = await this.deliveryMethodRepository.findDeliveryMethodById(id);

    if (!deliveryMethodExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return deliveryMethodExist;
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    const updatedDeliveryMethod = await this.deliveryMethodRepository.updateDeliveryMethod(id, updateDeliveryMethodDto);

    if (!updatedDeliveryMethod.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedDeliveryMethod.raw[0];
  }

  async delete(id: number) {
    const deletedDeliveryMethod = await this.deliveryMethodRepository.deleteDeliveryMethod(id);

    if (!deletedDeliveryMethod.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedDeliveryMethod.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
