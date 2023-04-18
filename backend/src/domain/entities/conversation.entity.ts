import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { IConversation } from '../../common/interfaces/conversation.interface';
import { User } from './user.entity';
import { Message } from './messages.entity';

@Entity()
export class Conversation implements IConversation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_id: number;

  @Column()
  employee_id: number;

  @OneToMany(() => Message, message => message.conversation)
  messages: Message[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

 
  @ManyToOne(() => User)
  @JoinColumn({ name: 'employee_id', referencedColumnName: 'id' })
  employee: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: User;
}
