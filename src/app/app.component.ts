import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SheduleComponent } from './shedule/shedule.component';
import { DirectionComponent } from './direction/direction.component';
import { VenueComponent } from './venue/venue.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MainComponent, SheduleComponent, DirectionComponent, VenueComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conference-app';
}
