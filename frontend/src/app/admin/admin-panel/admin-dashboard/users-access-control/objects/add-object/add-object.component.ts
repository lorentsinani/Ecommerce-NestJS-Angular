import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Objects } from '../../../../../../core/interfaces/object.interface';
import { stringPatternValidator } from '../../../../../../core/validators/pattern-string.validator';
import { ServerErrorResponse } from '../../../../../../core/interfaces/http-error-response.interface';
import { ObjectsService } from '../../../../../../core/services/objects/objects.service';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.scss']
})
export class AddObjectComponent implements OnInit {
  objectForm: FormGroup;
  isCreated: boolean;
  isNotCreated: boolean;

  constructor(private formBuilder: FormBuilder, private objectsService: ObjectsService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.objectForm = this.formBuilder.group({
      name: ['', [Validators.required, stringPatternValidator]]
    });
  }

  onSubmit() {
    if (this.objectForm.invalid) return;

    this.createObject(this.objectForm.getRawValue());

    this.objectForm.reset();
  }

  private createObject(object: Objects): void {
    this.objectsService.createObject({ ...object, name: object.name.toLowerCase() }).subscribe({
      next: (createdObject: Objects) => {
        this.isCreated = true;
      },
      error: (error: ServerErrorResponse) => {
        console.log(error);
      }
    });
  }
}
