import { Component, Input } from '@angular/core';
import { Order } from '../../Order';

@Component({
  selector: 'app-reg-result',
  standalone: true,
  imports: [],
  templateUrl: './reg-result.component.html',
  styleUrl: './reg-result.component.css'
})
export class RegResultComponent {
@Input() order_data: Order | null = null;
}
