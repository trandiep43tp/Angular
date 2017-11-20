import { Component} from '@angular/core';
import { course } from './course.class';

@Component ({
    selector: "app-project",
    templateUrl: "./project.component.html"
})

export class projectComponent {
    courses: course[]=[];  //chú ý phải khai báo giá trị ban đầu
    typeSummary: number=0;
    typeCurrency: string="usd";

    changeSummmary(e){
        this.typeSummary=e;
    }

    changeCurrency(e){
        this.typeCurrency=e;
    }
    constructor (){
        
        this.courses.push(
             new course("C01","Lập trình hướng dối tượng",300, "c01.jpg","Lúc sau, Bí thư Thành ủy TP HCM Nguyễn Thiện Nhân và một số cán bộ ngành giáo dục đến trong sự niềm nở của vợ chồng ông giáo già. 'Mấy chục năm rồi thầy ạ, lúc em về trường là 30 tuổi, giờ đã 64', ông Nhân mở đầu câu chuyện",["php", "angular"]
             )
        );
        
        this.courses.push(
            new course("C02","Lập trình hướng dối tượng",30, "c01.jpg","Lúc sau, Bí thư Thành ủy TP HCM Nguyễn Thiện Nhân và một số cán bộ ngành giáo dục đến trong sự niềm nở của vợ chồng ông giáo già.",["php", "frontend"]
            )
       )
       this.courses.push(
            new course("C03","Lập trình hướng dối tượng",30, "c01.jpg","Lúc sau, Bí thư Thành ủy TP HCM Nguyễn Thiện Nhân và một số cán bộ ngành giáo dục đến trong sự niềm nở của vợ chồng ông giáo già.",["php", "backend"]
            )
        )
        this.courses.push(
            new course("C04","Lập trình hướng đối tượng",30, "c01.jpg","Lúc sau, Bí thư Thành ủy TP HCM Nguyễn Thiện Nhân và một số cán bộ ngành giáo dục đến trong sự niềm nở của vợ chồng ông giáo già.",["php", "java"]
            )
       )
      
    }


    
    //hinh: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-3C79zymRF0hsIUQyQKOu28SDfZ-MMeu2ozdcnz-2jx0pFIm0A";

}