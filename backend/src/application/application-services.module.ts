import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppEmployeeModule } from './app-employee/app-employee.module';
import { ProfileModule } from './profile/profile.module';
import { AppAdminModule } from './app-admin/app-admin.module';
import { ChatModule } from './chat/chat.module';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [AuthModule, AppEmployeeModule, AppAdminModule, ProfileModule, ChatModule, CaslModule]
})
export class ApplicationServicesModule {}
