import { HttpErrorResponse } from '@angular/common/http';

export interface ServerErrorResponse {
  statusCode: number;
  apiUrl: string;
  message: any;
  error: HttpErrorResponse;
}
