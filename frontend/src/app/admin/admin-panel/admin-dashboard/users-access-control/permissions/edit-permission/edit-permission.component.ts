import { PermissionsService } from './../../../../../../core/services/permissions/permissions.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Permissions } from '../../../../../../core/interfaces/permissions.interface';
import { PermissionAction } from '../../../../../../core/constants/enums/permission-action.enum';
import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { Objects } from '../../../../../../core/interfaces/object.interface';
import { ObjectsService } from '../../../../../../core/services/objects/objects.service';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.scss']
})
export class EditPermissionComponent implements OnInit {
  permissionId: number;
  permissionForm: FormGroup;
  permission$: Observable<Permissions>;
  objects: Objects[];
  isUpdated = false;
  isNotUpdated = false;

  constructor(
    private formBuilder: FormBuilder,
    private permissionsService: PermissionsService,
    private objectsService: ObjectsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();
    this.getAllObjects();
    this.initPermissionIdFromRoute();

    this.permission$.subscribe();
  }

  createForm() {
    this.permissionForm = this.formBuilder.group({
      action: ['', [Validators.required, this.enumValidator]],
      objectId: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.permissionForm.invalid) {
      return;
    }

    this.updatePermission(this.permissionForm.getRawValue());

    this.permissionForm.reset();
  }

  initPermissionIdFromRoute() {
    this.permission$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.permissionId = +params.get('id');
        return this.permissionsService.getPermissionById(this.permissionId);
      }),
      tap(permission => {
        this.permissionForm.patchValue({
          action: permission.action,
          objectId: permission.objectId
        });
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    );
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

  updatePermission(permission: Permissions) {
    this.permissionsService.updatePermission(this.permissionId, permission).subscribe({
      next: (updatedPermission: Permissions) => {
        this.isUpdated = true;

        this.permissionForm.patchValue({
          action: updatedPermission.action,
          objectId: updatedPermission.objectId
        });
      },
      error: (error: ServerErrorResponse) => {
        this.isNotUpdated = true;
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
