import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert, BeforeUpdate, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Suppliers } from './suppliers.entity';
import { Category } from './category.entity';
import { ProductDetails } from './product-details.entity';
import { IProduct } from '../../common/interfaces/product.interface';

@Entity()
export class Product implements IProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_name', type: 'varchar', length: 255, nullable: false })
  productName: string;

  @Column({ name: 'product_code', type: 'varchar', length: 50, unique: true, nullable: false })
  productCode: string;

  @Column({ name: 'supplier_id' })
  supplierId: number;

  @ManyToOne(() => Suppliers, { nullable: false })
  @JoinColumn({ name: 'supplier_id', referencedColumnName: 'id' })
  supplier: Suppliers;

  @Column({ name: 'category_id' })
  categoryId: number;

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;

  @Column({ name: 'released_date', type: 'date', nullable: false })
  releasedDate: Date;

  @Column({ name: 'price_with_vat', type: 'decimal', precision: 10, scale: 2, nullable: false })
  priceWithVat: number;

  @Column({ name: 'price_without_vat', type: 'decimal', precision: 10, scale: 2, nullable: false })
  priceWithoutVat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  vat: number;

  @Column({ name: 'availability_in_stock', type: 'integer', nullable: false })
  availabilityInStock: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  discount: number;

  @Column({ name: 'product_details_id' })
  productDetailsId: number;

  @ManyToOne(() => ProductDetails, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_details_id', referencedColumnName: 'id' })
  productDetails: ProductDetails;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  calculatePriceWithVat() {
    if (this.vat && this.priceWithoutVat) {
      this.priceWithVat = this.priceWithoutVat * (1 + this.vat / 100);
    }
  }
}
