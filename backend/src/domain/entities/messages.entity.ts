import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IMessage } from '../../common/interfaces/message.interface';
import { Conversation } from './conversation.entity';
import { User } from './user.entity';

@Entity()
export class Messages implements IMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  conversation_id: number;

  @Column({ type: 'integer' })
  sender_id: number;

  @Column({ type: 'text', nullable: false })
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Conversation, conversation => conversation.messages)
  conversation: Conversation;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'sender_id', referencedColumnName: 'id' })
  sender: User;
}
