import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IObject } from '../../common/interfaces/object.interface';

@Entity()
export class Objects implements IObject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  name: string;
}
