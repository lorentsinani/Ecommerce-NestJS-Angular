import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateOrderStatusDto } from '../../common/dtos/orders-status/update-order-status.dto';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { OrdersStatusService } from './orders-status.service';
import { CreateOrderStatusDto } from '../../common/dtos/orders-status/create-order-status.dto';
import { OrdersStatus } from '../entities/orders-status.entity';

@Controller('orders-status')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Orders Status'))
export class OrdersStatusController {
  constructor(private orderStatusService: OrdersStatusService) {}

  @Post()
  create(@Body() createOrderStatusDto: CreateOrderStatusDto): Promise<OrdersStatus> {
    return this.orderStatusService.create(createOrderStatusDto);
  }

  @Get()
  findAll(): Promise<OrdersStatus[]> {
    return this.orderStatusService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<OrdersStatus> {
    return this.orderStatusService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrderStatusDto: UpdateOrderStatusDto): Promise<OrdersStatus> {
    return this.orderStatusService.update(id, updateOrderStatusDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<OrdersStatus> {
    return this.orderStatusService.delete(id);
  }
}
