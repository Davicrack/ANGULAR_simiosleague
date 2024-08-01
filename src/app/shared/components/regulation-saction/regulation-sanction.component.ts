import { Component, OnInit } from '@angular/core';
import { RegulationSanction } from '../../models/regulation-sanction.model';
import { RegulationSanctionService } from '../../../core/services/JSON-Reader/regulation-sanction-JSON/regulation-sanction.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-regulation-sanction-list',
  standalone: true,
  templateUrl: './regulation-sanction.component.html',
  styleUrls: ['regulation-sanction.component.scss'],
  imports: [
    MatTableModule,
  ]
})
export class RegulationSanctionListComponent implements OnInit {

  regulationSanctions? : RegulationSanction[];


  displayedColumns: string[] = ['id', 'description', 'penaltyPoints', 'penaltyType'];

  
  constructor(private regulationSanctionService: RegulationSanctionService) { }

  ngOnInit(): void {
    this.fetchRegulationSanctions();
    
  }

  fetchRegulationSanctions(): void {
    this.regulationSanctionService.getRegulationSanctions()
      .subscribe(data => {
        this.regulationSanctions = data;
      });
  }
}
