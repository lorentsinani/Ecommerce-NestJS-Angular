import { PipeTransform, Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class NullDtoValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any) {
    if (value === null || Object.keys(value).length === 0) {
      throw new HttpException('DTO is null', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
