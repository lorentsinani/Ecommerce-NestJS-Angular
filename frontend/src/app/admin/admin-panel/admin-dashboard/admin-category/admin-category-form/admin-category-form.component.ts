import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../../core/services/category/category.service';


@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.scss'],
})
export class AdminCategoryFormComponent {
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required],
    });
  }

  onSubmit() {
    const formData = this.toFormData(this.categoryForm);

    if (this.categoryForm.valid) {
      // this.categoryService.createCategory({}).subscribe(
      // res => console.log('Created'),
      // err => console.log('Not created')
      // );
    }
    return;
  }

  toFormData(form: FormGroup) {
    const formData = new FormData();
    formData.append('name', form.get('name').value);
    formData.append('description', form.get('description').value);
    formData.append('image', form.get('image').value);
    return formData;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.categoryForm.get('image').setValue(file);
    }
  }
}
