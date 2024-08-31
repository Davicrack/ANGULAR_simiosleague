import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './log-in-button.component.html',
  styleUrl: './log-in-button.component.scss'
})
export class LogInButtonComponent {
  constructor(private router : Router){};

  goToLogin(){
    this.router.navigate(['/user/login']);
  }
}
