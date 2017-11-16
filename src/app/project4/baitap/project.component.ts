import { Component} from '@angular/core';
import { course } from './course.class';

@Component ({
    selector: "app-project",
    templateUrl: "./project.component.html"
})

export class projectComponent {
    courses: course[]=[];  //chú ý phải khai báo giá trị ban đầu
    constructor (){
        
        this.courses.push(
             new course("C01","Lập trình hướng đối tượng",30, "c01.jpg","aaaaaaaaaaaaaaaa",["php", "angular"]
             )
        );
        
        this.courses.push(
            new course("C02","Lập trình hướng đối tượng",30, "c01.jpg","bbbbbbbbbbbbbbbbbb",["php", "frontend"]
            )
       )
       this.courses.push(
            new course("C03","Lập trình hướng đối tượng",30, "c01.jpg","ccccccccccccccccccccc",["php", "backend"]
            )
        )
        this.courses.push(
            new course("C04","Lập trình hướng đối tượng",30, "c01.jpg","dddddddddddddddddddđ",["php", "java"]
            )
       )
      
    }


    title: string="Project 4";
    hinh: string="./../../../images/hinh_dep.jpg";
    //hinh: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-3C79zymRF0hsIUQyQKOu28SDfZ-MMeu2ozdcnz-2jx0pFIm0A";

}