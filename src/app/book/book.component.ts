import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  value: number=0;
  changeValue(e){
    if(e){
      this.value=this.value+1;
    }else{
      this.value=this.value-1;
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
