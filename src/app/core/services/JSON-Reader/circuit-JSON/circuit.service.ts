// regulation-sanction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Circuit } from '../../../../shared/models/circuit.model';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  private apiUrl = 'http://localhost:8080/api/'; // Reemplaza con la URL real

  constructor(private http: HttpClient) { }

  getCircuits(): Observable<Circuit[]> {
    const actualURL = this.apiUrl + "circuit/ver";
    return this.http.get<Circuit[]>(actualURL);
  }

  addCircuit(circuit: Circuit): Observable<Circuit> {
    const actualURL = this.apiUrl + "circuit/crear";
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Circuit>(actualURL, circuit, { headers });
  }

  removeCircuit(id : number): Observable<void>{
    const actualURL = this.apiUrl + "circuit/eliminar/" + id;
    return this.http.delete<void>(actualURL);
  }
  uploadImage(file: File, path : string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    const params = new HttpParams().set('path', path);

    return this.http.post(`${this.apiUrl}images/upload`, formData, {params});
  }


}
