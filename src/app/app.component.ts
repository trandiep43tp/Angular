import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  //biến cho input
  tieude:string="Project 3-input property";
  mota: string = "Mô tả";

  //hàm cho output
  answer(e):void{
    console.log(e);
  }




}
