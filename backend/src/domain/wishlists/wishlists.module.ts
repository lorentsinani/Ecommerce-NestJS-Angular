import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistsController } from './wishlists.controller';
import { WishlistsRepository } from './wishlists.repository';
import { WishlistsService } from './wishlists.service';
import { Wishlist } from '../entities/wishlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist])],
  controllers: [WishlistsController],
  providers: [WishlistsService, WishlistsRepository]
})
export class WishlistsModule {}
