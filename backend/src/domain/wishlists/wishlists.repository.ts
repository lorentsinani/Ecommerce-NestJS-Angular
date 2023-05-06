import { Repository, DataSource, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Wishlist } from '../entities/wishlist.entity';
import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from 'src/common/dtos/wishlist/create-wishlist.dto';
import { UpdateWishlistDto } from 'src/common/dtos/wishlist/update-wishlist.dto';

@Injectable()
export class WishlistsRepository extends Repository<Wishlist> {
  constructor(dataSource: DataSource) {
    super(Wishlist, dataSource.createEntityManager());
  }

  createWishedItem(createWishlistDto: CreateWishlistDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Wishlist).values(createWishlistDto).returning('*').execute();
  }

  findAllWishedItems(): Promise<Wishlist[]> {
    return this.find();
  }

  findWishlistById(id: number): Promise<Wishlist | null> {
    return this.createQueryBuilder('wishlists').where('id = :id', { id }).getOne();
  }

  findWishlistsByProductId(product_id: number): Promise<Wishlist[] | null> {
    return this.createQueryBuilder('wishlists').where('product_id = :product_id', { product_id }).getMany();
  }

  findWishlistsByCustomerId(customer_id: number): Promise<Wishlist[] | null> {
    return this.createQueryBuilder('wishlists').where('customer_id = :customer_id', { customer_id }).getMany();
  }

  updateWishlist(id: number, updateWishlistDto: UpdateWishlistDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Wishlist).set(updateWishlistDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteWishlist(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Wishlist).where('id = :id', { id }).returning('*').execute();
  }
}
