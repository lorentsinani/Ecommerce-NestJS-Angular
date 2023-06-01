import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Role } from '../../../../../../../core/interfaces/role.interface';

@Component({
  selector: 'app-list-roles-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class ListRolesRowComponent {
  @Input() role: Role;
  @Output() onDeleteRole: EventEmitter<number> = new EventEmitter();

  onDeleteAction(id: number) {
    this.onDeleteRole.emit(id);
  }
}
