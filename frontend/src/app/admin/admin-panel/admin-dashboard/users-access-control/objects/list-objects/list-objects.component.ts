import { Component, ViewEncapsulation } from '@angular/core';
import { Objects } from '../../../../../../core/interfaces/object.interface';
import { ObjectsService } from '../../../../../../core/services/objects/objects.service';
import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { getObjectColumns } from '../../../../../../core/utilities/object-columns.util';

@Component({
  selector: 'app-list-objects',
  templateUrl: './list-objects.component.html',
  styleUrls: ['./list-objects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListObjectsComponent {
  columns: string[];
  objects: Objects[];
  emptyData: boolean;

  constructor(private objectsService: ObjectsService) {}

  ngOnInit(): void {
    this.getAllObjects();
  }

  private getAllObjects(): void {
    this.objectsService.getAllObjects().subscribe({
      next: (objects: Objects[]) => {
        if (objects.length) {
          this.objects = objects;
          this.columns = getObjectColumns(this.objects);
        } else {
          this.emptyData = true;
        }
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }
}
