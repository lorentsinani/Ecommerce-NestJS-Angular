import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe, UseFilters, UsePipes } from '@nestjs/common';
import { ObjectsService } from './objects.service';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { CreateObjectDto } from '../../common/dtos/objects/create-object.dto';
import { UpdateObjectDto } from '../../common/dtos/objects/update-object.dto';

@Controller('objects')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Object'))
export class ObjectsController {
  constructor(private readonly objectsService: ObjectsService) {}

  @Post()
  create(@Body() createObjectDto: CreateObjectDto) {
    return this.objectsService.create(createObjectDto);
  }

  @Get()
  findAll() {
    return this.objectsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.objectsService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateObjectDto: UpdateObjectDto) {
    return this.objectsService.update(id, updateObjectDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.objectsService.delete(id);
  }
}
