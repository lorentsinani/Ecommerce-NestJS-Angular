import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProducerDto } from '../../common/dtos/producer/create-producer.dto';
import { ProducerService } from './producer.service';
import { UpdateProducerDto } from '../../common/dtos/producer/update-producer.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { Producer } from '../entities/producer.entity';

@Controller('producer')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('User'))
export class ProducerController {
  constructor(private producerService: ProducerService) {}

  @Post()
  create(@Body() createProducerDto: CreateProducerDto): Promise<Producer> {
    return this.producerService.create(createProducerDto);
  }

  @Get()
  findAll(): Promise<Producer[]> {
    return this.producerService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Producer> {
    return this.producerService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id') id: number, @Body() updateProducerDto: UpdateProducerDto): Promise<Producer> {
    return this.producerService.update(id, updateProducerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Producer> {
    return this.producerService.delete(id);
  }
}
