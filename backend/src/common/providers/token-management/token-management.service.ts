import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenManagementService {
  private blacklist: Set<string> = new Set();

  addTokenToBlacklist(token: string): boolean {
    return !!this.blacklist.add(token);
  }

  isTokenBlacklisted(token: string): boolean {
    return this.blacklist.has(token);
  }
}
