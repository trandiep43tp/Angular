import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Injectable()

export class formService{
    constructor(private http: Http){}

     postServer(value){
        const url="http://localhost:3000/form"; 
        const headers = new Headers({'Content-Type':'application/json'});
        const body= JSON.stringify(value);    // stringify là chuyển về chuỗi json
        console.log(body);
        return this.http.post(url,body,{headers})
                .toPromise()
                .then(res =>res.json());               
        
     }
}