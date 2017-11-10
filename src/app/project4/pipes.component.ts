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
        'price': 69.8765432,
        'require': ["TyperScript", "html", "css"]
    };

    str:string="tran van diep";
    percentA:number=0.12345;
    numberA: number=12345.67;

    //Custom pipes
    text: string="AnguLar 4 is very easy";
    
}