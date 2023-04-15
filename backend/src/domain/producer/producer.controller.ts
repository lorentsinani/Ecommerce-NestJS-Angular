import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProducerDto } from '../../common/dtos/producer/create-producer.dto';
import { ProducerService } from './producer.service';
import { UpdateProducerDto } from '../../common/dtos/producer/update-producer.dto';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('producer')
@UsePipes(new ValidationPipe())
export class ProducerController {
  constructor(private producerService: ProducerService) {}

  @Post()
  @UseFilters(new DuplicateKeyExceptionFilter('User'))
  async create(@Body() createProducerDto: CreateProducerDto) {
    return this.producerService.create(createProducerDto);
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.producerService.findById(id);
  }

  @Get()
  async findAll() {
    return this.producerService.findAll();
  }

  @Patch(':id')
  @UseFilters(new DuplicateKeyExceptionFilter('User'))
  @UsePipes(new NullDtoValidationPipe())
  async update(@Param('id') id: number, @Body() updateProducerDto: UpdateProducerDto) {
    return this.producerService.update(id, updateProducerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.producerService.delete(id);
  }
}
