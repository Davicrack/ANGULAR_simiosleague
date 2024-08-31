import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  loginForm: FormGroup;
  loginError: string = '';

  
  private apiUrl = 'http://localhost:8080/api/user/validate';
  
  constructor(private http : HttpClient, private fb: FormBuilder){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  changeMonkey(monkey:string) {
    document.getElementsByClassName('monkey')[0].textContent = monkey;
  }
  validateUser(username : String, password : String) : Observable<boolean>{
    const body = {username, password};
    return this.http.post<boolean>(this.apiUrl, body);
  }
  
  logIn() : void{
    if (this.loginForm.invalid) {
      alert("noo");
      return; // Puedes agregar lógica para mostrar mensajes de error de validación
    }
    const { username, password } = this.loginForm.value;
    alert(username + " " + password);
    this.validateUser(username, password).subscribe(
      isValid => {
        if (isValid) {
          // Redirige o muestra mensaje de éxito
          console.log('Login successful');
        } else {
          this.loginError = 'Invalid username or password';
        }
      },
      error => {
        // Maneja errores de la solicitud HTTP
        this.loginError = 'An error occurred while trying to validate credentials';
      }
    );
  }
}
