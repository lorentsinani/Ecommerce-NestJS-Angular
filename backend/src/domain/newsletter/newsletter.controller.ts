import { Body, Controller, Delete, Get, Param, Query, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { UpdateNewsletterDto } from '../../common/dtos/newsletter/update-newsletter.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { CreateNewsletterDto } from '../../common/dtos/newsletter/create-newsletter.dto';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { Newsletter } from '../entities/newsletter.entity';

@Controller('newsletter')
@UseFilters(new QueryExceptionFilter('Newsletter'))
export class NewsletterController {
  constructor(private newsletterService: NewsletterService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createNewsletterDto: CreateNewsletterDto): Promise<Newsletter> {
    return this.newsletterService.create(createNewsletterDto);
  }

  @Get()
  findAll(): Promise<Newsletter[]> {
    return this.newsletterService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Newsletter> {
    return this.newsletterService.findById(id);
  }

  @Get()
  findByEmail(@Query('email') email: string): Promise<Newsletter> {
    return this.newsletterService.findByEmail(email);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() createNewsletterDto: UpdateNewsletterDto): Promise<Newsletter> {
    return this.newsletterService.update(id, createNewsletterDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<Newsletter> {
    return this.newsletterService.delete(id);
  }
}
