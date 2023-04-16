import { Module } from '@nestjs/common';
import { DeliveryMethod } from '../entities/delivery-method.entity';
import { DeliveryMethodController } from './delivery-method.controller';
import { DeliveryMethodService } from './delivery-method.service';
import { DeliveryMethodRepository } from './delivery-method.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryMethod])],
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService, DeliveryMethodRepository]
})
export class DeliveryMethodsModule {}
