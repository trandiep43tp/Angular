import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bai8-app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormSignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 // email: string=''; //nếu không muốn dùng email thì ngModel bỏ ngoặc đi
  pass: string='';
  onClick(val){    
    console.log(val);
    throw new Error("Form is invalid");  //nếu bị lỗi thì ném ra một thông báo
  }


}
