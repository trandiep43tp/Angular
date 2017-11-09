import { Component} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component ({
    selector: "app-pipes",
    templateUrl: "./pipes.component.html"
})

export class pipesComponent{
    // tạo một đối tượng
    courseObj: any ={
        'id': 20,
        'name': "Angular 4",
        'date': new Date(),
        'price': 69.8,
        'require': ["TyperScript", "html", "css"]
    };
}