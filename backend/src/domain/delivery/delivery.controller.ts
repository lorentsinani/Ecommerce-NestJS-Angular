import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from '../../common/dtos/delivery/create-delivery.dto';
import { UpdateDeliveryDto } from '../../common/dtos/delivery/update-delivery.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';

@Controller('delivery')
@UsePipes(new ValidationPipe())
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  @UseFilters(new QueryExceptionFilter('Delivery'))
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryService.create(createDeliveryDto);
  }

  @Get()
  findAll() {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.deliveryService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  @UseFilters(new QueryExceptionFilter('Delivery'))
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDeliveryDto: UpdateDeliveryDto) {
    return this.deliveryService.update(id, updateDeliveryDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deliveryService.delete(id);
  }
}
