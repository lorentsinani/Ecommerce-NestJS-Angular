import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProducerRepository } from './producer.repository';
import { IProducer } from '../../common/interfaces/producer.interface';
import { CreateProducerDto } from '../../common/dtos/producer/create-producer.dto';
import { UpdateProducerDto } from '../../common/dtos/producer/update-producer.dto';

@Injectable()
export class ProducerService {
  private NotCreatedExceptionMessage = 'Producer is not created';
  private NotFoundExceptionMessage = 'Producer is not found';

  constructor(private readonly producerRepository: ProducerRepository) {}

  async create(createProducerDto: CreateProducerDto): Promise<IProducer> {
    const createdProducer = await this.producerRepository.createProducer(createProducerDto);

    if (!createdProducer) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdProducer.raw[0];
  }

  async findAll(): Promise<IProducer[]> {
    return this.producerRepository.findAllProducer();
  }

  async findById(id: number): Promise<IProducer> {
    const producerExist = await this.producerRepository.findProducerById(id);

    if (!producerExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return producerExist;
  }

  async update(id: number, updateProducerDto: UpdateProducerDto): Promise<IProducer> {
    const updatedProducer = await this.producerRepository.updateProducer(id, updateProducerDto);

    if (!updatedProducer.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedProducer.raw[0];
  }

  async delete(id: number): Promise<IProducer> {
    const deletedProducer = await this.producerRepository.deleteProducer(id);

    if (!deletedProducer.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedProducer.raw[0];
  }
}
