import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { WishlistsRepository } from './wishlists.repository';
import { CreateWishlistDto } from 'src/common/dtos/wishlist/create-wishlist.dto';
import { UpdateWishlistDto } from 'src/common/dtos/wishlist/update-wishlist.dto';
import { Wishlist } from '../entities/wishlist.entity';

@Injectable()
export class WishlistsService {
  private NotCreateExceptionMessage = 'Wished item is not saved';
  private NotFoundExceptionMessage = 'No wished item';
  constructor(private readonly wishlistsRepostiory: WishlistsRepository) {}

  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    const createdWishedItem = await this.wishlistsRepostiory.createWishedItem(createWishlistDto);

    if (!this.getIdentifierId(createdWishedItem)) {
      throw new HttpException(this.NotCreateExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdWishedItem.raw[0];
  }

  async findAll(): Promise<Wishlist[]> {
    return this.wishlistsRepostiory.findAllWishedItems();
  }

  async findById(id: number): Promise<Wishlist> {
    const wishedList = await this.wishlistsRepostiory.findWishlistById(id);

    if (!wishedList) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return wishedList;
  }

  async findByCustomerId(customer_id: number): Promise<Wishlist[]> {
    const wishlists = await this.wishlistsRepostiory.findWishlistsByCustomerId(customer_id);
    if (!wishlists) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return wishlists;
  }

  async findByProductId(product_id: number): Promise<Wishlist[]> {
    const wishlists = await this.wishlistsRepostiory.findWishlistsByCustomerId(product_id);
    if (!wishlists) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return wishlists;
  }

  async update(id: number, updateWishlistDto: UpdateWishlistDto): Promise<Wishlist> {
    const updatedWishlist = await this.wishlistsRepostiory.updateWishlist(id, updateWishlistDto);

    if (!updatedWishlist.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedWishlist.raw[0];
  }

  async delete(id: number): Promise<Wishlist> {
    const deletedWishlist = await this.wishlistsRepostiory.deleteWishlist(id);

    if (!deletedWishlist.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedWishlist.raw[0];
  }

  getIdentifierId(result: InsertResult): Boolean {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
