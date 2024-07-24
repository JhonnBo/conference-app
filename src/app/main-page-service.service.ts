import { Injectable } from '@angular/core';
import { Data_main } from '../Data_main';

@Injectable({
  providedIn: 'root'
})
export class MainPageServiceService {

  constructor() { }

  public data:Data_main[] = [];

  GetData(){
    this.data=[];
    this.data.push(new Data_main("./assets/images/home/direction.jpg", 
      "Тематика", "Будуть розглянуті важливі питання, що стосуються аспеків управління проектами розвитку регіону.",
      "Тематика конференції",  "Питання, що потрубують негайного вирішення", "/direction"
    ));
    this.data.push(new Data_main("./assets/images/home/schedule.JPG", 
      "Розклад", "Насолоджуйтесь двома незабутніми та насиченими подіями днями: зустрічі, знайомства та гарний настрій.", "Розклад конференції",  "Два незабутні дні у місті на Дніпрі", "/shedule"
    ));
    this.data.push(new Data_main("./assets/images/home/kntu.jpg", 
      "Місце проведення", "Конференція відбудеться в Херсонському національному технічному університеті в головному корпусі.",
      "Місце проведення",  "Головний корпус ХНТУ", "/venue"
    ));
    return this.data;
  }
}
