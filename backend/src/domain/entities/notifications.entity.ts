import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { INotification } from '../../common/interfaces/notifications.interface';
import { User } from './user.entity';

@Entity()
export class Notifications implements INotification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number' })
  recipient_id: number;

  @Column()
  message_content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'recipient_id', referencedColumnName: 'id' })
  recipient: User;
}
