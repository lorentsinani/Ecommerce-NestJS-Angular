import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductImagesRepository } from './product-images.repository';
import { CreateProductImageDto } from '../../common/dtos/product-images/create-product-images.dto';
import { ProductImages } from '../entities/product-images.entity';
import { UpdateProductImageDto } from '../../common/dtos/product-images/update-product-images.dto';

@Injectable()
export class ProductImagesService {
  private NotCreateExceptionMessage = 'Product image is not created';
  private NotFoundExceptionMessage = 'Product image is not found';
  constructor(private readonly productImageRepostiory: ProductImagesRepository) {}

  async create(createProductImageDto: CreateProductImageDto) {
    const createdProductImage = await this.productImageRepostiory.createProductImages(createProductImageDto);

    if (!createdProductImage) {
      throw new HttpException(this.NotCreateExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdProductImage.raw[0];
  }

  async findAll(): Promise<ProductImages[]> {
    return this.productImageRepostiory.findAllProductImages();
  }

  async findById(id: number): Promise<ProductImages> {
    const productImageExist = await this.productImageRepostiory.findProductImagesById(id);

    if (!productImageExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return productImageExist;
  }

  async findByUrl(url: string): Promise<ProductImages> {
    const productImageExist = await this.productImageRepostiory.findProductImagesByUrl(url);

    if (!productImageExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return productImageExist;
  }

  async update(id: number, updateProductImageDto: UpdateProductImageDto) {
    const updatedProductImage = await this.productImageRepostiory.updateProductImages(id, updateProductImageDto);

    if (!updatedProductImage.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedProductImage.raw[0];
  }

  async delete(id: number) {
    const deletedProductImage = await this.productImageRepostiory.deleteProductImages(id);

    if (!deletedProductImage.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedProductImage.raw[0];
  }
}
