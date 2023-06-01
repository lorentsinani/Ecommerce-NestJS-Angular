import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../core/interfaces/user.interface';
import { ProfileService } from '../../../../core/services/profile/profile.service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {
  user: User;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.profileService.getUserDetails().subscribe({
      next: (user: User) => {
        this.user = user;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
