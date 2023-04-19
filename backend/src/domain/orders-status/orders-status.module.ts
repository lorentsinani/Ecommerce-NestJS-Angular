import { Module } from '@nestjs/common';
import { OrdersStatusController } from './orders-status.controller';
import { OrdersStatusService } from './orders-status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersStatus } from '../entities/orders-status.entity';
import { OrdersStatusRepository } from './orders-status.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersStatus])],
  controllers: [OrdersStatusController],
  providers: [OrdersStatusService, OrdersStatusRepository]
})
export class OrdersStatusModule {}
