import { Component, Input } from '@angular/core';
import { Data_direction } from '../../Data_direction';

@Component({
  selector: 'app-direction-block',
  standalone: true,
  imports: [],
  templateUrl: './direction-block.component.html',
  styleUrl: './direction-block.component.css'
})
export class DirectionBlockComponent {
@Input() direction_data: Data_direction | null = null;
}
