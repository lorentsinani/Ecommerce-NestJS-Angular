import { ObjectsService } from './../../../../../../core/services/objects/objects.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Objects } from '../../../../../../core/interfaces/object.interface';
import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { stringPatternValidator } from '../../../../../../core/validators/pattern-string.validator';
import { Observable, catchError, throwError, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-object',
  templateUrl: './edit-object.component.html',
  styleUrls: ['./edit-object.component.scss']
})
export class EditObjectComponent implements OnInit {
  isUpdated: boolean;
  isNotUpdated: boolean;
  objectForm: FormGroup;
  objectId: number;
  object$: Observable<Objects>;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private objectsService: ObjectsService) {}

  ngOnInit(): void {
    this.createForm();
    this.initObjectIdFromRoute();

    this.object$.subscribe();
  }

  private createForm() {
    this.objectForm = this.formBuilder.group({
      name: ['', [Validators.required, stringPatternValidator]]
    });
  }

  onSubmit() {
    if (this.objectForm.invalid) return;

    this.updateObject(this.objectForm.getRawValue());

    this.objectForm.reset();
  }

  private initObjectIdFromRoute(): void {
    this.object$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.objectId = +params.get('id');
        return this.objectsService.getObjectById(this.objectId);
      }),
      tap(object => {
        this.objectForm.patchValue({
          name: object.name
        });
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  private updateObject(object: Objects): void {
    this.objectsService.updateObject(this.objectId, { ...object, name: object.name.toLowerCase() }).subscribe({
      next: (updatedObject: Objects) => {
        this.isUpdated = true;

        this.objectForm.patchValue({
          name: updatedObject.name
        });
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
        this.isNotUpdated = true;
      }
    });
  }
}
