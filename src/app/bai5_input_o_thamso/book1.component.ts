import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book1',
  template: `<button class="btn btn-primary" (click)="addForParrent(true)">Tăng</button>
            <button class="btn btn-primary" (click)="addForParrent(false)">Giảm</button>
            `
  
})
export class Book1Component implements OnInit {
  @Output() myClick = new EventEmitter<boolean>();

  addForParrent(value:boolean){
    this.myClick.emit(value);
  }
   
  constructor() { }

  ngOnInit() {
  }

}