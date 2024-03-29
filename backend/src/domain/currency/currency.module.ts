import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from '../entities/currency.entity';
import { CurrencyRepository } from './currency.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Currency])],
  providers: [CurrencyService, CurrencyRepository],
  controllers: [CurrencyController],
  exports: [CurrencyService]
})
export class CurrencyModule {}
