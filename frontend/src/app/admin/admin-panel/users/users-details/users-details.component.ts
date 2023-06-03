import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../core/services/users/users.service';
import { User } from '../../../../core/interfaces/user.interface';
import { RoleService } from '../../../../core/services/role/role.service';
import { Role } from '../../../../core/interfaces/role.interface';
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(private usersService: UsersService, private fb: FormBuilder, private roleService: RoleService) { }
  isCreated: boolean;
  isNotCreated: boolean;
  user: User[];
  roles: Role[];
  showUsers: boolean = false;

  ngOnInit(): void {
    this.createForm();
    this.getAllRoles();
    this.getAllUsers();
  }

  createForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      userDetails: ['', Validators.required],
      roleId: ['', Validators.required]
    });
  }

  onCreate() {
    if (this.form.invalid) {
      return;
    }
    const user = this.form.getRawValue();
    this.createUser(user);
    this.form.reset();
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe(roles => {
      this.roles = roles;
      console.log(this.roles);
    });
  }
  getAllUsers() {
    this.usersService.getAllUsers().subscribe(user => {
      this.user = user;
      this.getAllRoles();
    });
  }
  showAllUsers() {
    this.showUsers = !this.showUsers;
    if (this.showUsers) {
      this.getAllUsers();
    }
  }
  getRoleName(roleId: number): string {
    const role = this.roles.find(r => r.id === roleId);
    return role ? role.name : '';
  }
  deleteUser(userId: number) {
    this.usersService.deleteUser(userId).subscribe(() => {
      this.user = this.user.filter(user => user.id !== userId);
    });
  }
  createUser(user: User) {
    this.usersService.createUser(user).subscribe({
      next: (createdUser: User) => {
        this.isCreated = true;
      },
      error: (error: any) => {
        this.isNotCreated = true;
        console.log(error);
      }
    });
  }

}