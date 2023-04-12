import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenManagementService {
  private tokenBlacklist: Set<{ token: string; expiration: number }> = new Set();
  private tokenExpiration = 3600; // token expiration time in seconds

  // async deleteToken(token: string): Promise<void> {}

  // async revokeToken(token: string): Promise<void> {}

  // async isTokenBlacklisted(token: string): Promise<boolean> {}
}
