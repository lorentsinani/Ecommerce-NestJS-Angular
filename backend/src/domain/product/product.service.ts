import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IProduct } from '../../common/interfaces/product.interface';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from '../../common/dtos/product/create-product.dto';
import { UpdateProductDto } from '../../common/dtos/product/update-product.dto';

@Injectable()
export class ProductService {
  private NotCreatedExceptionMessage = 'Product is not created';
  private NotFoundExceptionMessage = 'Product is not found';

  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<IProduct> {
    const createdProduct = await this.productRepository.createProduct(createProductDto);

    if (!createdProduct) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }
    return createdProduct.raw[0];
  }

  async findAll(): Promise<IProduct[]> {
    return this.productRepository.findAllProducts();
  }

  async findById(id: number): Promise<IProduct> {
    const productExist = await this.productRepository.findProductById(id);

    if (!productExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return productExist;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<IProduct> {
    const updatedProduct = await this.productRepository.updateProduct(id, updateProductDto);

    if (!updatedProduct.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedProduct.raw[0];
  }

  async delete(id: number): Promise<IProduct> {
    const deletedProduct = await this.productRepository.deleteProduct(id);

    if (!deletedProduct.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedProduct.raw[0];
  }
}
