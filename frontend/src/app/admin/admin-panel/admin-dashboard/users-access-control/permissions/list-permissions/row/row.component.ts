import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Permissions } from '../../../../../../../core/interfaces/permissions.interface';

@Component({
  selector: 'app-list-permissions-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class ListPermissionsRowComponent {
  @Input() permission: Permissions;
  @Output() onDeletePermission: EventEmitter<number> = new EventEmitter();

  onDeleteAction(id: number) {
    this.onDeletePermission.emit(id);
  }
}
