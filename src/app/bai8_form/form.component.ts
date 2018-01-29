import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'bai8-app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormSignInComponent implements OnInit {

  constructor(private http: Http) { 
          
  }

  ngOnInit() {
  }
 // email: string=''; //nếu không muốn dùng email thì ngModel bỏ ngoặc đi
  pass: string='';
  onClick(nameForm){   
    const url="http://localhost:3000/form"; 
    const headers = new Headers({'Content-Type':'application/json'});
    const body= JSON.stringify(nameForm.value);    // stringify là chuyển về chuỗi json
    return this.http.post(url,body,{headers})
            .toPromise()
            .then(res =>res.json())
            .then(resJson =>console.log(resJson))
            .catch(err =>console.log(err));
    

    //console.log(val);
    //throw new Error("Form is invalid");  //nếu bị lỗi thì ném ra một thông báo. Để thông báo chỉ hiện lên console 
    //thì ta đổi submit thành ngSubmit
  }

  postToExpress(value){
    const url="http://localhost:3000/form1"; 
    const headers = new Headers({'Content-Type':'application/json'});
    const body= JSON.stringify({name: 'Tran diep'});    // stringify là chuyển object sang json
    return this.http.post(url,body,{headers})
            .toPromise()
            .then(res =>res.text())
            .then(resText =>console.log(resText))
            .catch(err =>console.log(err));

  }

}
