import { Component, OnInit } from '@angular/core';
import { formService } from './form.service';

@Component({
  selector: 'bai8-app-form-tach-service',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [formService]
})
export class Bai8FormComponent {

  constructor(private formService: formService) {}
  ten: string ="diep";

  onClick(nameForm){ 
    this.formService.postServer(nameForm.value)
    .then(result =>this.ten= result.email)
    //.then(result => console.log(result))
    .catch(err => console.log(err));
  }
  

}
