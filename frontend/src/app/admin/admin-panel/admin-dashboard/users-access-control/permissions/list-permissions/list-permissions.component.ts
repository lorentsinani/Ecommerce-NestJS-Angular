import { Component, OnInit } from '@angular/core';
import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { PermissionsService } from '../../../../../../core/services/permissions/permissions.service';
import { Permissions } from '../../../../../../core/interfaces/permissions.interface';

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.component.html',
  styleUrls: ['./list-permissions.component.scss']
})
export class ListPermissionsComponent implements OnInit {
  emptyData: boolean;
  permissions: Permissions[];
  columns: string[] = ['Id', 'Action', 'Object'];

  constructor(private permissionsService: PermissionsService) {}

  ngOnInit(): void {
    this.getAllPermissions();
  }

  getAllPermissions() {
    this.permissionsService.getAllPermissions().subscribe({
      next: (permissions: Permissions[]) => {
        if (permissions.length) {
          this.permissions = permissions;
        } else {
          this.emptyData = true;
        }
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }

  deletePermission(id: number) {
    this.permissionsService.deletePermission(id).subscribe({
      next: (permission: Permissions) => {
        this.permissions = this.permissions.filter(p => p.id !== id);
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }
}
