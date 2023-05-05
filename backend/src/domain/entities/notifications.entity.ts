import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { INotification } from '../../common/interfaces/notifications.interface';
import { User } from './user.entity';

@Entity()
export class Notifications implements INotification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'recipient_id', type: 'number' })
  recipientId: number;

  @Column({ name: 'message_content' })
  messageContent: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'recipient_id', referencedColumnName: 'id' })
  recipient: User;
}
