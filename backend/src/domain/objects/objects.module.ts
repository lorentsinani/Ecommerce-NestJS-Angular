import { Module } from '@nestjs/common';
import { ObjectsService } from './objects.service';
import { ObjectsController } from './objects.controller';

@Module({
  controllers: [ObjectsController],
  providers: [ObjectsService]
})
export class ObjectsModule {}
