import { Module } from '@nestjs/common';
import { TokenManagementService } from './token-management.service';

@Module({
  providers: [TokenManagementService],
  exports: [TokenManagementService]
})
export class TokenManagementModule {}
