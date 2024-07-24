import { Component, Input } from '@angular/core';
import { Data_main } from '../../Data_main';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-teaser-block',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-teaser-block.component.html',
  styleUrl: './main-teaser-block.component.css'
})
export class MainTeaserBlockComponent {
  @Input() teaser_data: Data_main | null = null;
}
