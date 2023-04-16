import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from '../entities/delivery.entity';
import { DeliveryRepository } from './delivery.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Delivery])],
  controllers: [DeliveryController],
  providers: [DeliveryService, DeliveryRepository]
})
export class DeliveryModule {}
