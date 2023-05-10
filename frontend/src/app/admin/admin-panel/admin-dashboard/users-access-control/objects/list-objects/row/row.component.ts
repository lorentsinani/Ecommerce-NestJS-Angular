import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Objects } from '../../../../../../../core/interfaces/object.interface';

@Component({
  selector: 'app-list-objects-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class ListObjectsRowComponent implements OnInit {
  @Input() object: Objects;
  @Output() onDeleteObject: EventEmitter<number> = new EventEmitter();

  
  ngOnInit(): void {}

  onDeleteAction(id: number): void {
    this.onDeleteObject.emit(id);
  }
}
