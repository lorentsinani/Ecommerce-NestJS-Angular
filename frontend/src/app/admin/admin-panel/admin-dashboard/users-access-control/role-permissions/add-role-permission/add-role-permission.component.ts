import { PermissionAction } from './../../../../../../core/constants/enums/permission-action.enum';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolePermissions } from '../../../../../../core/interfaces/role-permissions.interface';
import { RolePermissionsService } from '../../../../../../core/services/role-permissions/role-permissions.service';
import { Role } from '../../../../../../core/interfaces/role.interface';
import { RoleService } from '../../../../../../core/services/role/role.service';
import { PermissionsService } from '../../../../../../core/services/permissions/permissions.service';
import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { Permissions } from '../../../../../../core/interfaces/permissions.interface';
import { ObjectsService } from '../../../../../../core/services/objects/objects.service';
import { Objects } from '../../../../../../core/interfaces/object.interface';

@Component({
  selector: 'app-add-role-permission',
  templateUrl: './add-role-permission.component.html',
  styleUrls: ['./add-role-permission.component.scss']
})
export class AddRolePermissionComponent {
  isCreated: boolean;
  isNotCreated: boolean;
  rolePermissionForm: FormGroup;
  roles: Role[];
  permissions: Permissions[];
  objects: Objects[];

  constructor(
    private formBuilder: FormBuilder,
    private rolePermissionsService: RolePermissionsService,
    private roleService: RoleService,
    private permissionService: PermissionsService,
    private objectsService: ObjectsService
  ) {}

  ngOnInit() {
    this.createForm();
    this.getAllRoles();
    this.getAllObjects();
    this.getAllPermissionsBySelectedObject();
  }

  createForm() {
    this.rolePermissionForm = this.formBuilder.group({
      role: ['', Validators.required],
      object: ['', Validators.required],
      action: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.rolePermissionForm.invalid) return;

    this.createRolePermissions(this.rolePermissionForm.getRawValue());

    this.rolePermissionForm.reset();
  }

  createRolePermissions(data: { role: string; object: string; action: PermissionAction }) {
    const permissionId = this.findPermissionIdByObjectAndAction(+data.object, data.action);
    const roleId = +data.role;

    this.rolePermissionsService.createRolePermission({ permissionId, roleId }).subscribe({
      next: (rolePermissions: RolePermissions) => {
        this.isCreated = true;
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
        this.isNotCreated = true;
      }
    });
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe({
      next: (roles: Role[]) => {
        this.roles = roles;
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }

  getAllObjects() {
    this.objectsService.getAllObjects().subscribe({
      next: (objects: Objects[]) => {
        this.objects = objects;
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }

  getAllPermissionsBySelectedObject() {
    this.rolePermissionForm.get('object').valueChanges.subscribe(objectId => {
      if (objectId) {
        this.getAllPermissionsByObject(+objectId);
      }
    });
  }

  getAllPermissionsByObject(objectId: number) {
    this.permissionService.getAllPermissionsByObject(objectId).subscribe({
      next: (permissions: Permissions[]) => {
        this.permissions = permissions;
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }

  findPermissionIdByObjectAndAction(objectId: number, action: PermissionAction): number {
    const permission = this.permissions.find(p => p.objectId === objectId && p.action == action);
    console.log(permission);
    return permission ? permission.id : null;
  }
}
