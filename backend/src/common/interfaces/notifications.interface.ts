import { IUser } from './user.interface';

export interface INotification {
  id: number;
  recipient_id: number;
  recipient: IUser;
  message_content: string;
  created_at: Date;
  updated_at: Date;
}
