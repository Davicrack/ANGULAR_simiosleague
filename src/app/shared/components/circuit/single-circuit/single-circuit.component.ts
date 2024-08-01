import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Circuit } from '../../../models/circuit.model';

@Component({
  selector: 'app-single-circuit',
  standalone: true,
  imports: [],
  templateUrl: './single-circuit.component.html',
  styleUrl: './single-circuit.component.scss',
})
export class SingleCircuitComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.circuit = {} as Circuit;
  }

  circuit!: Circuit;
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const url = `http://localhost:8080/api/circuit/ver/${id}`;
    this.http.get<any>(url).subscribe((data) => {
      this.circuit = {
        id: data.id,
        name: data.name,
        description : data.description,
        location: data.location,
        country: data.country,
        length: data.length,
        imagePaths: data.imagePath,
      };
    });
  }
}
