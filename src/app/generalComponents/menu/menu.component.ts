import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatFormField, MatLabel, MatOption, MatSelect } from '@angular/material/select';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { RedesSocialesComponent2 } from "../../redes-sociales/redes-sociales.component";
import { LogInComponent } from '../../log-in/log-in.component';
import { LogInButtonComponent } from "../../log-in-button/log-in-button.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    NgClass,
    RedesSocialesComponent2,
    LogInComponent,
    LogInButtonComponent
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private router: Router) {}
  activeButton : string = '';
  redirectTo(actualButton : string,url: string) {
    this.activeButton = actualButton;
    this.router.navigateByUrl(url);
  }
  setActive(button: any) {
    var buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }  
}
