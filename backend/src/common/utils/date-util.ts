// utils/date.util.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class DateUtil {
  getTimestampOneWeekAgo(): number {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return oneWeekAgo.getTime();
  }
}
