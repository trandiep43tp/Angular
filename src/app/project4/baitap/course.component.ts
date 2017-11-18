import { Component,Input } from '@angular/core';
import { course } from './course.class';



@Component ({
    selector: "app-course",
    templateUrl: "./course.component.html"
})

export class courseComponent{
    @Input ("mcourse") courseObj: course;  //khai báo biến nhận giá trị input 
    hinh: string="http://9mobi.vn/cf/images/2015/03/nkk/hinh-nen-dep-1.jpg";
}