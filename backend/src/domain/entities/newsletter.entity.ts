import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { INewsletter } from '../../common/interfaces/newsletter.interface';

@Entity()
export class Newsletter implements INewsletter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  email: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
