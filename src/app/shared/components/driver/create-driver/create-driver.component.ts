import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Component } from '@angular/core';
import { Nationality } from '../../../models/enum/Nationality';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-driver',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatOption,
    MatSelect,
    MatLabel,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule],
  templateUrl: './create-driver.component.html',
  styleUrl: './create-driver.component.scss'
})
export class CreateDriverComponent {
  driverForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.driverForm = this.fb.group({
      name: ['', Validators.required],
      nationality: ['', Validators.required],
      birthDate: ['', Validators.required],
      type: ['', Validators.required],
      teams: [[]], // Ajusta según cómo manejes los equipos
      image: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.driverForm.patchValue({
        image: file
      });
    }
  }

  onSubmit() {
    if (this.driverForm.valid) {
      const formData = new FormData();
      formData.append('name', this.driverForm.get('name')?.value);
      formData.append('nationality', this.driverForm.get('nationality')?.value);
      formData.append('birthDate', this.driverForm.get('birthDate')?.value);
      formData.append('type', this.driverForm.get('type')?.value);
      formData.append('teams', JSON.stringify(this.driverForm.get('teams')?.value));
      formData.append('image', this.driverForm.get('image')?.value);

      this.http.post('/api/driver/create', formData)
        .subscribe(response => {
          console.log('Driver created successfully', response);
        }, error => {
          console.error('Error creating driver', error);
        });
    }
  }
}
