import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { ProducerService } from '../../../../../core/services/producer/producer.service';

@Component({
  selector: 'app-admin-producer-form',
  templateUrl: './admin-producer-form.component.html',
  styleUrls: ['./admin-producer-form.component.scss'],
})
export class AdminProducerFormComponent {
  producerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private producerService: ProducerService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.producerForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      establishedYear: [Number, Validators.required],
      contactEmail: [EmailValidator, Validators.required],
    });
  }

  onSubmit() {
    const formData = this.toFormData(this.producerForm);
    if (this.producerForm.valid) {
      // this.producerService.createProducer({}).subscribe(
      // res => console.log('Created'),
      // err => console.log('Not created')
      // );
    }
    return;
  }

  toFormData(form: FormGroup) {
    const formData = new FormData();
    formData.append('name', form.get('name').value);
    formData.append('country', form.get('country').value);
    formData.append('establishedYear', form.get('establishedYear').value);
    formData.append('contactEmail', form.get('contactEmail').value);
    return formData;
  }
}
