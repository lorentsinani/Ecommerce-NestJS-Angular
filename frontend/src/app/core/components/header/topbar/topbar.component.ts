import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthStateService } from '../../../state/auth-state.service';
import { skip, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  isAuthenticated: boolean;
  userName: string;
  private unsubscribe$ = new Subject<void>();

  constructor(private authService: AuthService, private authStateService: AuthStateService) {}

  ngOnInit(): void {
    this.initAuthenticationState();
    this.subscribeToAuthStateChanges();
  }

  initAuthenticationState() {
    this.isAuthenticated = this.authService.isUserAuthenticated();
    if (this.isAuthenticated) {
      this.userName = this.authService.getUserName();
    }
  }

  subscribeToAuthStateChanges() {
    this.authStateService.isAuthenticated$.pipe(takeUntil(this.unsubscribe$), skip(1)).subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });

    this.authStateService.userName$.pipe(takeUntil(this.unsubscribe$), skip(1)).subscribe(userName => {
      this.userName = userName;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
