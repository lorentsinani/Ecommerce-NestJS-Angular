// utils/date.util.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class DateUtil {
  private static currentDate = new Date();

  static getOneWeekAgoTimestamp() {
    const oneWeekAgoTimestamp = new Date(DateUtil.currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    return oneWeekAgoTimestamp;
  }
}
