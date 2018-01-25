import { Component,Input } from '@angular/core';
import { course } from './course.class';



@Component ({
    selector: "app-course",
    templateUrl: "./course.component.html"
})

export class courseComponent{
    @Input ("mcourse") courseObj: course;  //khai báo biến nhận giá trị input 
    @Input("typeSummary") mtypeSummary: number;
    @Input("typeCurrency") mtypeCurrency: string;

     //có thể viết luôn trong pipes
    changeSummary(): number{
    
        if(this.mtypeSummary==1){
            return 20;
        }if(this.mtypeSummary==2){
            return this.courseObj.summary.length;
        }else return 5;
    }

    changeSummary1(): any[]{
            let art: any[]=[5,"*****"] ;      
            if(this.mtypeSummary==1){
                art[0]=20;
            }if(this.mtypeSummary==2){
                art[0]= this.courseObj.summary.length;
                art[1]="";
            }
            return art;
    }
    //có thể viết luôn trong pipes
    charactor(): string{
        if(this.mtypeSummary==2){
            return "";
        }else return "......";
    }
    hinh: string="assets/images/banh_chung.jpg";
}