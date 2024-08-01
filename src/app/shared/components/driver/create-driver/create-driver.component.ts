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
  
  driverForm!: FormGroup;
  nacionalidades! : string[];
  constructor(private fb:FormBuilder){
    this.driverForm = this.fb.group({
      name: ['', Validators.required],
      nationality: ['', Validators.required],
      birthDate: ['', Validators.required],
      team: ['', Validators.required]
    });
  }

  ngOnInit(){
    this.nacionalidades = Object.keys(Nationality).filter(key=> isNaN(Number(key)));
  }

  onSubmit(){
    alert('enviado');
  }
}
