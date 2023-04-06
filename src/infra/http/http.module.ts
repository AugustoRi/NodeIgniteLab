import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
})
export class HttpModule {}
