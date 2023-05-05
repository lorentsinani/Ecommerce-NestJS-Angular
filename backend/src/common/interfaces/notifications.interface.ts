import { IUser } from './user.interface';

export interface INotification {
  id: number;
  recipientId: number;
  recipient: IUser;
  messageContent: string;
  createdAt: Date;
  updatedAt: Date;
}
