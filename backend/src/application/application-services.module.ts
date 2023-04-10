import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AdminAppModule } from './admin-app/admin-app.module';

@Module({
  imports: [AuthModule, AdminAppModule],
})
export class ApplicationServicesModule {}
