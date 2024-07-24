import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainPageServiceService } from '../main-page-service.service';
import { CommonModule } from '@angular/common';
import { MainTeaserBlockComponent } from '../main-teaser-block/main-teaser-block.component';
import { Data_main } from '../../Data_main';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink,CommonModule, MainTeaserBlockComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

constructor(private d_m_service: MainPageServiceService){}

d_m:Data_main[] = this.d_m_service.GetData();

}
