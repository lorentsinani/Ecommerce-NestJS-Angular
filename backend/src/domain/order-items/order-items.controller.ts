import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from '../../common/dtos/order-items/create-order-items.dto';
import { UpdateOrderItemDto } from '../../common/dtos/order-items/update-order-items.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { OrderItems } from '../entities/order-items.entity';

@Controller('order-items')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Orders Items'))
export class OrderItemsController {
  constructor(private orderItemsService: OrderItemsService) {}

  @Post()
  create(@Body() createOrderItemDto: CreateOrderItemDto): Promise<OrderItems> {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  findAll(): Promise<OrderItems[]> {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<OrderItems> {
    return this.orderItemsService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItems> {
    return this.orderItemsService.update(id, updateOrderItemDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<OrderItems> {
    return this.orderItemsService.delete(id);
  }
}
