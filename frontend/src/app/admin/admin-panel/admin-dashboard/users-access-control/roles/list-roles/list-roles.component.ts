import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../../../core/interfaces/role.interface';
import { RoleService } from '../../../../../../core/services/role/role.service';
import { getObjectColumns } from '../../../../../../core/utilities/object-columns.util';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss']
})
export class ListRolesComponent implements OnInit {
  emptyData: boolean = false;
  roles: Role[];
  columns: string[];
  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe((roles: Role[]) => {
      if (roles.length) {
        this.roles = roles;
        this.columns = getObjectColumns(this.roles);
      }
      this.emptyData = true;
    });
  }

  deleteRole(id: number) {
    this.roleService.deleteRole(id).subscribe((role: Role) => {
      this.roles = this.roles.filter(role => role.id !== id);
    });
  }
}