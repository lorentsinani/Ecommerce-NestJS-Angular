import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Role } from '../../../../../../core/interfaces/role.interface';
import { RoleService } from '../../../../../../core/services/role/role.service';
import { stringPatternValidator } from '../../../../../../core/validators/pattern-string.validator';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  roleId: number;
  roleForm: FormGroup;
  role$: Observable<Role>;
  isUpdated = false;
  isNotUpdated = false;

  constructor(private formBuilder: FormBuilder, private roleService: RoleService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.createForm();
    this.initRoleIdFromRoute();

    this.role$.subscribe();
  }

  private createForm() {
    this.roleForm = this.formBuilder.group({
      name: ['', [Validators.required, stringPatternValidator]]
    });
  }

  onSubmit() {
    if (this.roleForm.invalid) {
      return;
    }

    this.updateRole(this.roleForm.getRawValue());

    this.roleForm.reset();
  }

  private initRoleIdFromRoute() {
    this.role$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.roleId = +params.get('id');
        return this.roleService.getRoleById(this.roleId);
      }),
      tap(role => {
        this.roleForm.patchValue({
          name: role.name
        });
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  updateRole(role: Role) {
    this.roleService.updateRole(this.roleId, role).subscribe({
      next: (updatedRole: Role) => {
        this.isUpdated = true;

        this.roleForm.patchValue({
          name: updatedRole.name
        });
      },
      error: error => {
        this.isNotUpdated = true;
        console.log(error);
      }
    });
  }
}
