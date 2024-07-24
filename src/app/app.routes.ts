import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SheduleComponent } from './shedule/shedule.component';
import { DirectionComponent } from './direction/direction.component';
import { VenueComponent } from './venue/venue.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    // { path: 'main', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: '', redirectTo: "/main", pathMatch:"full" },
    { path: 'direction', component: DirectionComponent },
    { path: 'shedule', component: SheduleComponent },
    { path: 'venue', component: VenueComponent },
    { path: 'register', component: RegisterComponent }
];
