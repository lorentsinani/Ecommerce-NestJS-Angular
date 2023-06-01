import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  public isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public userName$ = new BehaviorSubject<string>('');

  updateAuthState(isAuthenticated: boolean, userName: string) {
    this.isAuthenticated$.next(isAuthenticated);
    this.userName$.next(userName);
  }
}
