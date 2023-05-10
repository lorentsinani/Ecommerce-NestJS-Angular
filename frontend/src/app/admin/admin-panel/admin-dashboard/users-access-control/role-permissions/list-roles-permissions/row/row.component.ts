import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RolePermissions } from '../../../../../../../core/interfaces/role-permissions.interface';

@Component({
  selector: 'app-list-roles-permissions-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class ListRolesPermissionsRowComponent implements OnInit {
  @Input() rolePermission: RolePermissions;
  @Output() onDeleteRolePermission: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeleteAction(id: number) {
    this.onDeleteRolePermission.emit(id);
  }
}
