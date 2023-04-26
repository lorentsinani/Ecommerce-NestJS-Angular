import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeliveryMethodService } from './delivery-method.service';
import { CreateDeliveryMethodDto } from '../../common/dtos/delivery-method/create-delivery-method.dto';
import { UpdateDeliveryMethodDto } from '../../common/dtos/delivery-method/update-delivery-method.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';

@Controller('delivery-method')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Delivery Method'))
export class DeliveryMethodController {
  constructor(private deliveryMethodService: DeliveryMethodService) {}

  @Post()
  create(@Body() createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodService.create(createDeliveryMethodDto);
  }

  @Get()
  findAll() {
    return this.deliveryMethodService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.deliveryMethodService.findById(id);
  }

  @Patch()
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodService.update(id, updateDeliveryMethodDto);
  }

  @Delete(':id')
  delete(@Param('id ', ParseIntPipe) id: number) {
    return this.deliveryMethodService.delete(id);
  }
}
