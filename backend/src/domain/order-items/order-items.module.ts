import { Module } from '@nestjs/common';
import { OrderItemsController } from './order-items.controller';
import { OrderItemsService } from './order-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItems } from '../entities/order-items.entity';
import { OrderItemsRepository } from './order-items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItems])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService, OrderItemsRepository]
})
export class OrderItemsModule {}
