import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuComponent } from './generalComponents/menu/menu.component';
import { RedesSocialesComponent } from './shared/components/redes-sociales/redes-sociales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MenuComponent,
    RedesSocialesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simiosLeagueAngular';
}
