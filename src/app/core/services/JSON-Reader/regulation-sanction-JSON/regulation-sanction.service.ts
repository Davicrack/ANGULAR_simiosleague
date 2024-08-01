// regulation-sanction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegulationSanction } from '../../../../shared/models/regulation-sanction.model'; // Importa el modelo

@Injectable({
  providedIn: 'root'
})
export class RegulationSanctionService {

  private apiUrl = 'http://localhost:8080/api/regulationsanction/ver';
  
  constructor(private http: HttpClient) { }

  getRegulationSanctions(): Observable<RegulationSanction[]> {
    return this.http.get<RegulationSanction[]>(this.apiUrl);
  }
}
