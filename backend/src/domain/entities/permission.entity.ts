import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Objects } from './objects.entity';

// store permissions that have pattern like 'can action a object"
@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  action: string;

  @Column({ type: 'int' })
  object_id: number;

  @ManyToOne(() => Objects)
  @JoinColumn({ name: 'object_id', referencedColumnName: 'id' })
  objects: Objects[];
}
