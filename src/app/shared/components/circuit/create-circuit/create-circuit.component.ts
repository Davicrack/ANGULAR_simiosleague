import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CircuitService } from '../../../../core/services/JSON-Reader/circuit-JSON/circuit.service';
import { Circuit } from '../../../models/circuit.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Nationality } from '../../../models/enum/Nationality';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-create-circuit',
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
    MatButtonModule
  ],
  templateUrl: './create-circuit.component.html',
  styleUrl: './create-circuit.component.scss'
})
export class CreateCircuitComponent {
  circuit: Circuit = {
    name: '',
    description: '',
    location: '',
    country: '',
    length: 0,
    imagePaths: ['']
  };
  
  private baseUrl = "http://localhost:8080/api/circuit"

  constructor(private renderer: Renderer2, private el: ElementRef,private http: HttpClient) { }

  subirImagen(imagen: File, nombreCircuito: string, p0: { responseType: string; }): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagen', imagen);
    formData.append('nombreCircuito', nombreCircuito);

    return this.http.post(`${this.baseUrl}/subir`, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  subirImagenPrincipal(imagen: File, nombreCircuito: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagen', imagen);
    formData.append('nombreCircuito', nombreCircuito);

    return this.http.post(`${this.baseUrl}/subir`, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  imagen: File | null = null;
  nombreCircuito: string = '';
  mensaje: string = '';
  imageUrl: string | ArrayBuffer | null = null;

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.imagen = event.target.files[0];
      this.previewImage(this.imagen!);
    }
  }

  previewImage(file: File){
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    }
    reader.readAsDataURL(file);
  }

  onImageAdded(event: any){

    const file = event.target.files[0];
    if (file) {
      this.displayImage(file);
    }
  }


  displayImage(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result as string;

      // Crear un nuevo div para la imagen
      const imageDiv = this.renderer.createElement('div');
      this.renderer.addClass(imageDiv, 'image');

      // Crear una nueva imagen
      const image = this.renderer.createElement('img');
      this.renderer.setAttribute(image, 'src', imageUrl);
      

      // Añadir la imagen al div
      this.renderer.appendChild(imageDiv, image);

      // Obtener el contenedor donde se añadirá la imagen
      const container = this.el.nativeElement.querySelector('#imageContainer');

      // Añadir el nuevo div con la imagen al contenedor
      this.renderer.appendChild(container, imageDiv);
    };

    reader.readAsDataURL(file);
  }
  onSubmit() {
    if (this.imagen && this.nombreCircuito) {
        const div = document.getElementById('imageContainer');
        if (div) {
            const imagenes = div.querySelectorAll('img');

            imagenes.forEach(imagen => {
                // Crear un canvas
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                canvas.width = imagen.width;
                canvas.height = imagen.height;

                context?.drawImage(imagen, 0, 0, canvas.width, canvas.height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], 'imagen.png');

                        this.subirImagen(file, this.nombreCircuito, { responseType: 'text' }).subscribe({
                          next: (response) => {
                              console.log('Respuesta del backend:', response);  // Esto te mostrará la respuesta exacta
                              this.mensaje = 'Imagen subida con éxito';
                          },
                          error: (error) => {
                              console.error('Error al subir la imagen:', error);
                              this.mensaje = `Error al subir la imagen: ${error.message}`;
                          }
                        });                
                    }
                }, 'image/png');
            });
        }
    } else {
        this.mensaje = 'Por favor, seleccione una imagen y proporcione el nombre del circuito.';
    }
  }
}