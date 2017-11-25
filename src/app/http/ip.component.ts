import { Component } from "@angular/core";
import { ipService } from './ip.service';

@Component({
    selector: "app-ip",
    template: `<h3>{{ip}}</h3>`,
    providers: [ipService]
})

export class ipComponent {
    ip: string;

    constructor( private ipservice: ipService){
      this.ipservice.getIp()
      .then(value =>this.ip=value) //nếu có value trả về từ phương thức getIp() trong ip.service thì gán cho biến ip
    }
}

