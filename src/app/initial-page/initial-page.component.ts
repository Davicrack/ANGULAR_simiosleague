import { Component } from '@angular/core';
import { CalendarDivComponent } from '../calendar-div/calendar-div.component';
import { CircuitDivComponent } from '../circuit-div/circuit-div.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [
    CalendarDivComponent,
    CircuitDivComponent,
  ],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss'
})
export class InitialPageComponent {

  constructor(private router: Router) {}

  redirect(path: String){    
      this.router.navigate([path]); 
  }
}
