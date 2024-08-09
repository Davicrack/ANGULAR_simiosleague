// regulation-sanction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../../../../shared/models/driver.module';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private apiUrl = 'http://localhost:8080/api/'; // Reemplaza con la URL real

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<Driver[]> {
    const actualURL = this.apiUrl + "driver/ver";
    return this.http.get<Driver[]>(actualURL);
  }
}
