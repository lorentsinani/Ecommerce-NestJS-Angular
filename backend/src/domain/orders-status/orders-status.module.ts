import { Module } from '@nestjs/common';
import { OrdersStatusController } from './orders-status.controller';
import { OrdersStatusService } from './orders-status.service';

@Module({
  controllers: [OrdersStatusController],
  providers: [OrdersStatusService]
})
export class OrdersStatusModule {}
