import { Component } from '@angular/core';
import { DirectionBlockComponent } from '../direction-block/direction-block.component';
import { DirectionPageServiceService } from '../direction-page-service.service';
import { Data_direction } from '../../Data_direction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direction',
  standalone: true,
  imports: [DirectionBlockComponent, CommonModule],
  templateUrl: './direction.component.html',
  styleUrl: './direction.component.css'
})
export class DirectionComponent {
  constructor(private d_d_service: DirectionPageServiceService){}

  d_d:Data_direction[] = this.d_d_service.GetData();
}
