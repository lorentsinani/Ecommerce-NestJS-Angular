import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RolePermissions } from '../../../../../../core/interfaces/role-permissions.interface';
import { RolePermissionsService } from '../../../../../../core/services/role-permissions/role-permissions.service';

@Component({
  selector: 'app-admin-list-roles-permissions',
  templateUrl: './list-roles-permissions.component.html',
  styleUrls: ['./list-roles-permissions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListRolesPermissionsComponent implements OnInit {
  emptyData: boolean;
  columns: string[] = ['Id', 'Role Id', 'Role Name', 'PermissionsId', 'Permission Action', 'Object Name'];
  rolePermissions: RolePermissions[];

  constructor(private rolePermissionsService: RolePermissionsService) {}

  ngOnInit() {
    this.getAllRolePermissions();
  }

  getAllRolePermissions() {
    this.rolePermissionsService.getAllRolePermissions().subscribe({
      next: (rolePermissions: RolePermissions[]) => {
        console.log(rolePermissions);
        if (rolePermissions.length) {
          this.rolePermissions = rolePermissions;
        } else {
          this.emptyData = true;
        }
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }

  deleteRolePermission(id: number) {
    this.rolePermissionsService.deleteRolePermission(id).subscribe({
      next: (rolePermission: RolePermissions) => {
        this.rolePermissions = this.rolePermissions.filter(rp => rp.id !== id);
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }
}
