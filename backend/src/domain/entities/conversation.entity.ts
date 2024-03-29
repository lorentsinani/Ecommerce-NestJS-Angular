import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { IConversation } from '../../common/interfaces/conversation.interface';
import { User } from './user.entity';
import { Message } from './message.entity';

@Entity()
export class Conversation implements IConversation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "customer_id"})
  customerId: number;

  @Column({ name: 'employee_id'})
  employeeId: number;

  @OneToMany(() => Message, messages => messages.conversation)
  messages: Message[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'employee_id', referencedColumnName: 'id' })
  employee: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: User;
}
