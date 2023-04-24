import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { WishlistsService } from './wishlists.service';
import { UpdateWishlistDto } from 'src/common/dtos/wishlist/update-wishlist.dto';
import { CreateWishlistDto } from 'src/common/dtos/wishlist/create-wishlist.dto';

@Controller('wishlists')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Wishlists'))
export class WishlistsController {
  constructor(private wishlistsService: WishlistsService) {}

  @Post()
  create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistsService.create(createWishlistDto);
  }

  @Get()
  findAll() {
    return this.wishlistsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.wishlistsService.findById(id);
  }

  @Get()
  findByCustomerId(@Query('customer_id') customerId: number) {
    return this.wishlistsService.findByCustomerId(customerId);
  }

  @Get()
  findByProductId(@Query('product_id') productId: number) {
    return this.wishlistsService.findByProductId(productId);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateWishlistDto: UpdateWishlistDto) {
    return this.wishlistsService.update(id, updateWishlistDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.wishlistsService.delete(id);
  }
}
