import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookChild',
  templateUrl: './bookChild.component.html',
  
})
export class BookChildComponent implements OnInit {
    @Input() name: string;   //trong ngoặc không có tham số thì tê bên ngoài phải trùng với nhau khi truyền từ hằng cha qua thằng con
    @Input() age: number;
  constructor() { }

  ngOnInit() {
  }

}