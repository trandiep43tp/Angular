import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  //biến cho input
  tieude:string="Project 3-input property 1123";
  mota: number = 2999;
  arr:string[]=["Like","Wow","Ha ha", "Angy","happy"];

  //hàm cho output
  answer(e):void{
    console.log(e);
  }


  //viết cho bài tập setting color
  resetColor: string="yellow";
  

  changecolor(e):void{
    this.resetColor=e;
  }
  setColor(){
    this.resetColor="yellow";
  }

}
