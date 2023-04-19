import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrdersDto } from '../../common/dtos/orders/create-orders.dto';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { OrdersService } from './orders.service';
import { UpdateOrdersDto } from '../../common/dtos/orders/update-orders.dto';

@Controller('orders')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Orders'))
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrdersDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findById(id);
  }

  @Get()
  findByCode(@Query('code') code: string) {
    return this.ordersService.findByCode(code);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrderDto: UpdateOrdersDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.delete(id);
  }
}
