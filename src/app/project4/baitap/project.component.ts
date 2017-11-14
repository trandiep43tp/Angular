import { Component} from '@angular/core';
@Component ({
    selector: "app-project",
    templateUrl: "./project.component.html"
})

export class projectComponent {
    arrcourse:string[]=["php","java","es6","c#"];
    title: string="Project 4";
    //hinh: string="C:\\wamp\www\Angular\src\images\banh_trung.jpg";
    hinh: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-3C79zymRF0hsIUQyQKOu28SDfZ-MMeu2ozdcnz-2jx0pFIm0A";

}