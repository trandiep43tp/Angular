/*  //không sử dụng onInit
import { Component } from "@angular/core";
import { ipService } from './ip.service';    

@Component({
    selector: "bai6-app-ip",
    template: `<h3>{{ip}}</h3>`
   // providers: [ipService]   //nếu sử dụng service cho nhiều component thì nên import vào trong app.module.ts
})

export class ipComponent {
    ip: string;

    constructor( private ipservice: ipService){
      this.ipservice.getIp()
      .then(value =>this.ip=value) //nếu có value trả về từ phương thức getIp() trong ip.service thì gán cho biến ip
      .catch(err => console.log(err))
    }
}
*/
//sử dụng onInit

import { Component, OnInit } from "@angular/core";
import { ipService } from './ip.service';    

@Component({
    selector: "bai6-app-ip",
    template: `<h3>{{ip}}</h3>`,
   // providers: [ipService]   //nếu sử dụng service cho nhiều component thì nên import vào trong app.module.ts
})

export class ipComponent implements OnInit {
    ip: string;

    constructor( private ipservice: ipService){}   //khai báo một biến có kiểu ipservice

    ngOnInit(): void{
        this.ipservice.getIp()
        .then(value =>this.ip=value) //nếu có value trả về từ phương thức getIp() trong ip.service thì gán cho biến ip
        .catch(err => console.log(err));
    }
}