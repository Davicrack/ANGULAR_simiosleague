import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api'; // URL del backend Spring

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const usuario = { username, password };
    return this.http.post<boolean>(`${this.baseUrl}/login`, usuario);
  }
}
