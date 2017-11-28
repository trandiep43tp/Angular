  //cách khai báo một service. chú ý trong app.module.ts phải import { HttpModule } from '@angular/http';
 // và HttpModule trong import
import { Component } from "@angular/core";
import { Http } from "@angular/http";
@Component({
    selector: "app-http",
    template: `<h3>{{ip}}</h3>`
})

export class httpComponent {
    ip: string="";
    constructor( private http: Http){
        this.http.get("http://ip.jsontest.com")
        .toPromise()
        .then(res =>res.json())
        .then(resJson =>this.ip= resJson.ip) // do resJson là một chuỗi Json 
        .catch(err =>console.log(err))

    }
}

