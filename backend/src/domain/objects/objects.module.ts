import { Module } from '@nestjs/common';
import { ObjectsService } from './objects.service';
import { ObjectsController } from './objects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Objects } from '../entities/objects.entity';
import { ObjectsRepository } from './objects.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Objects])],
  controllers: [ObjectsController],
  providers: [ObjectsService, ObjectsRepository]
})
export class ObjectsModule {}
