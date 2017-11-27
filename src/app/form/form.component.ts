import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormSignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 // email: string='';
  //pass: string='';
  onClick(val){    
    console.log(val);
  }


}
