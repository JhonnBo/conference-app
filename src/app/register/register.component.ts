import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { Order } from '../../Order';
import { RegResultComponent } from '../reg-result/reg-result.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RegResultComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      "userName": new FormControl("", Validators.required),
      "userEmail": new FormControl("", [Validators.required, Validators.email]),
      "userCount": new FormControl("1", Validators.required),
      "userComment": new FormControl("")
    });
  }

  oder: Order | null = null;

  oders: Order[] = [
    new Order("Іванов І.І.", "i.vv@gccc.com", "3", "Щасливі були дні конференції"),
    new Order("Сидоров І.І.", "oi.vv@gqc.com", "3", "Доставте швидко!"),
    new Order("Петров І.І.", "g.vv@gtc.com", "3", "Прекрасна конференція. Очікую наступних зустрічей!!!"),
    new Order("Гладков І.І.", "e.vv@gwc.com", "3", "")
  ];


  submit() {
    // console.log(this.myForm);
    this.oder = new Order(
      this.myForm.value.userName,
      this.myForm.value.userEmail,
      this.myForm.value.userCount,
      this.myForm.value.userComment
    )
    console.log(this.oder);
    this.oders.push(this.oder);
  }

}
