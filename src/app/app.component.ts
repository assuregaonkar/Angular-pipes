import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string | undefined;
  Date : string | undefined;
  Amount : number | undefined;
  onChangeName(value : string){
    this.name = value;
  }
  onChangeDate(value : string){
    this.Date = value;
  }
  onChangeAmount(value : string){
    this.Amount = parseFloat(value) ;
  }
}
