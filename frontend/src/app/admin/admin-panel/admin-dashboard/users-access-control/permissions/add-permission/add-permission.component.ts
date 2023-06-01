import { PermissionsService } from './../../../../../../core/services/permissions/permissions.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { stringPatternValidator } from '../../../../../../core/validators/pattern-string.validator';
import { Objects } from '../../../../../../core/interfaces/object.interface';
import { ObjectsService } from '../../../../../../core/services/objects/objects.service';
import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { Permissions } from '../../../../../../core/interfaces/permissions.interface';
import { PermissionAction } from '../../../../../../core/constants/enums/permission-action.enum';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.scss']
})
export class AddPermissionComponent implements OnInit {
  isCreated: boolean;
  emptyObjectData: boolean;
  isNotCreated: boolean;
  permissionForm: FormGroup;
  objects: Objects[];

  constructor(private formBuilder: FormBuilder, private objectsService: ObjectsService, private permissionsService: PermissionsService) {}

  ngOnInit(): void {
    this.getAllObjects();
    this.createForm();
  }

  createForm() {
    this.permissionForm = this.formBuilder.group({
      action: ['', [Validators.required, this.enumValidator]],
      objectId: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.permissionForm.invalid) return;

    this.createPermission(this.permissionForm.getRawValue());

    this.permissionForm.reset();
  }

  private createPermission(permission: Permissions) {
    this.permissionsService.createPermission({ ...permission, objectId: +permission.objectId }).subscribe({
      next: (permission: Permissions) => {
        this.isCreated = true;
      },
      error: (error: ServerErrorResponse) => {
        this.isNotCreated = true;
        console.log(error);
      }
    });
  }

  private getAllObjects() {
    this.objectsService.getAllObjects().subscribe({
      next: (objects: Objects[]) => {
        if (objects.length) {
          this.objects = objects;
        } else {
          this.emptyObjectData = true;
        }
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }

  enumValidator(control: AbstractControl) {
    if (!Object.values(PermissionAction).includes(control.value)) {
      return { invalidEnum: true };
    }
    return null;
  }
}
