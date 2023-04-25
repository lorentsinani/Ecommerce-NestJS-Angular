import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Objects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;
}
