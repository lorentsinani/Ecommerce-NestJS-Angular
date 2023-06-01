import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringPatternValidator } from '../../../../../../core/validators/pattern-string.validator';
import { RoleService } from '../../../../../../core/services/role/role.service';
import { Role } from '../../../../../../core/interfaces/role.interface';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent {
  roleForm: FormGroup;
  isCreated: boolean = false;
  isNotCreated: boolean = false;

  constructor(private formBuilder: FormBuilder, private roleService: RoleService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.roleForm = this.formBuilder.group({
      name: ['', [Validators.required, stringPatternValidator]]
    });
  }

  onSubmit() {
    if (this.roleForm.invalid) return;

    this.createRole(this.roleForm.getRawValue());

    this.roleForm.reset();
  }

  createRole(role: Role) {
    this.roleService.createRole(role).subscribe({
      next: (role: Role) => {
        this.isCreated = true;
      },
      error: error => {
        this.isNotCreated = true;
        console.log(error);
      }
    });
  }
}
