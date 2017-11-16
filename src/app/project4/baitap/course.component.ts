import { Component,Input } from '@angular/core';
import { course } from './course.class';



@Component ({
    selector: "app-course",
    templateUrl: "./course.component.html"
})

export class courseComponent{
    @Input ("mcourse") courseObj: course;  //khai báo biến nhận giá trị input 
}