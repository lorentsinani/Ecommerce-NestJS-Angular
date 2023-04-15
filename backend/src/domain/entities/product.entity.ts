import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert, BeforeUpdate, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Suppliers } from './suppliers.entity';
import { Category } from './category.entity';
import { ProductDetails } from './product-details.entity';
import { IProduct } from '../../common/interfaces/product.interface';

@Entity()
export class Product implements IProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  product_name: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  product_code: string;

  @Column()
  supplier_id: number;

  @ManyToOne(() => Suppliers, { nullable: false })
  @JoinColumn({ name: 'supplier_id', referencedColumnName: 'id' })
  supplier: Suppliers;

  @Column()
  category_id: number;

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;

  @Column({ type: 'date', nullable: false })
  released_date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price_with_vat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price_without_vat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  vat: number;

  @Column({ type: 'integer', nullable: false })
  availability_in_stock: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  discount: number;

  @Column()
  product_details_id: number;

  @ManyToOne(() => ProductDetails, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_details_id', referencedColumnName: 'id' })
  product_details: ProductDetails;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  calculatePriceWithVat() {
    if (this.vat && this.price_without_vat) {
      this.price_with_vat = this.price_without_vat * (1 + this.vat / 100);
    }
  }
}
