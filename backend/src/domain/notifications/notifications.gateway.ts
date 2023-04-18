import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { NotificationsService } from './notifications.service';

@WebSocketGateway()
export class NotificationsGateway {
  constructor(private readonly notificationsService: NotificationsService) {}

  @SubscribeMessage('createNotification')
  create(@MessageBody() createNotificationDto: any) {
    return this.notificationsService.create(createNotificationDto);
  }

  @SubscribeMessage('findAllNotifications')
  findAll() {
    return this.notificationsService.findAll();
  }

  @SubscribeMessage('findOneNotification')
  findOne(@MessageBody() id: number) {
    return this.notificationsService.findOne(id);
  }

  @SubscribeMessage('updateNotification')
  update(@MessageBody() updateNotificationDto: any) {
    return this.notificationsService.update(updateNotificationDto.id, updateNotificationDto);
  }

  @SubscribeMessage('removeNotification')
  remove(@MessageBody() id: number) {
    return this.notificationsService.remove(id);
  }
}
