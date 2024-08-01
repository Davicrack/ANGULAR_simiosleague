import { Component } from '@angular/core';
import { CircuitService } from '../../../core/services/JSON-Reader/circuit-JSON/circuit.service';
import { Circuit } from '../../models/circuit.model';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-circuit',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  templateUrl: './circuit.component.html',
  styleUrl: './circuit.component.scss'
})
export class CircuitComponent {
  removeCircuit(event : Event, id: number){
    
    event.stopPropagation();
    if (confirm('¿Estás seguro de que deseas eliminar este circuito?')) {
      this.circuitService.removeCircuit(id).subscribe(
        () => {
          console.log('Circuito eliminado exitosamente');
          // Actualiza la lista de circuitos después de la eliminación
          this.fetchCircuits();
        },
        error => {
          console.error('Error al eliminar el circuito', error);
        }
      );
    }
  }

  redirectCircuit(name : string) {
    this.router.navigate([`circuit`, name]);
  }
  circuitData? : Circuit[];

  displayedColumns: string[] = ['id', 'name', 'description', 'location', 'country', 'length', 'bin'];
  
  constructor(private router : Router,private circuitService: CircuitService, library : FaIconLibrary) { library.addIcons(faTrash);}

  ngOnInit(): void {
    this.fetchCircuits();
  }

  fetchCircuits(): void {
    this.circuitService.getCircuits()
      .subscribe(data => {
        this.circuitData = data;
      });
  }
}
