import { Body, Controller, Delete, Get, Param, Query, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { NewsletterService } from './newsletter.service';
import { INewsletter } from '../../common/interfaces/newsletter.interface';
import { UpdateNewsletterDto } from '../../common/dtos/newsletter/update-newsletter.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { CreateNewsletterDto } from '../../common/dtos/newsletter/create-newsletter.dto';

@Controller('newsletter')
export class NewsletterController {
  constructor(private newsletterService: NewsletterService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter('Newsletter'))
  async create(@Body() createNewsletterDto: CreateNewsletterDto): Promise<INewsletter> {
    return this.newsletterService.create(createNewsletterDto);
  }

  @Get()
  async findAll(): Promise<INewsletter[]> {
    return this.newsletterService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<INewsletter> {
    return this.newsletterService.findById(id);
  }

  @Get()
  async findByEmail(@Query('email') email: string): Promise<INewsletter> {
    return this.newsletterService.findByEmail(email);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter('Newsletter'))
  async update(@Param('id', ParseIntPipe) id: number, @Body() createNewsletterDto: UpdateNewsletterDto): Promise<INewsletter> {
    return this.newsletterService.update(id, createNewsletterDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<INewsletter> {
    return this.newsletterService.delete(id);
  }
}
