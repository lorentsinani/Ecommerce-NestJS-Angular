import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { PermissionsService } from '../../../../../../core/services/permissions/permissions.service';
import { Permissions } from '../../../../../../core/interfaces/permissions.interface';

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.component.html',
  styleUrls: ['./list-permissions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListPermissionsComponent implements OnInit {
  emptyData: boolean;
  permissions: Permissions[];
  columns: string[] = ['Id', 'Action', 'Object'];

  constructor(private permissionsService: PermissionsService) {}

  ngOnInit(): void {
    this.getAllPermissionsWithObjects();
  }

  getAllPermissionsWithObjects() {
    this.permissionsService.getAllPermissionsWithObjects().subscribe({
      next: (permissions: Permissions[]) => {
        if (permissions.length) {
          console.log(permissions);
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
