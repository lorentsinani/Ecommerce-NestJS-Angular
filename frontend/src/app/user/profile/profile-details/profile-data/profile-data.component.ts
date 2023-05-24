import { Component, Input } from '@angular/core';
import { User } from '../../../../core/interfaces/user.interface';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent {
  @Input() user: User;
}
