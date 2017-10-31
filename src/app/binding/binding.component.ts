import { Component } from "@angular/core";

declare var jQuery:any;  //định nghĩ lại biến.Quan trọng nếu không có hàm onkeyup(e) không chạy
@Component({
    moduleId: module.id,
    selector: "app-binding",
    templateUrl: "./binding.component.html",
    styleUrls: ["./binding.component.css"]
})



export class bindingComponent{
    
    // mặc định khi chạy sẽ gọi constructor. mình có thể thay đổi biến được
    constructor(){        
        // this.ten="Phía sau một con đường";
         this.baihatmoi();
     }
     
     //có thể viết hàm
    baihatmoi(){
        this.ten="Sầu tím thiệp hồng";
    }

    //interpolation
    ten:string="Trần văn Điệp";
    namsinh: number=1983;
    sothich={ game:"Liên minh" , hoc:"toán"};
    mang:string[]=["Một","Hai","ba"];
    hinh: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-3C79zymRF0hsIUQyQKOu28SDfZ-MMeu2ozdcnz-2jx0pFIm0A";
    
    //property
    link: string="https://angular.io/";

    //class
    mac_ao:boolean= true;

    //style
    mauchu:string="pink";

    //event
    click_hinh(e){
        //alert("Bạn vừa click hình");        
        //console.log("Bạn vừ click hình");
        alert(e.clientY);
        //thay đổi thuộc tính cho hình
        e.srcElement.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-3C79zymRF0hsIUQyQKOu28SDfZ-MMeu2ozdcnz-2jx0pFIm0A";
    }

    click(e){
        if(e.target.className=="btn btn-primary"){
           // alert(e.toElement.classList.value);
           e.target.className="btn btn-danger";
        }
        else{
           // alert(e.toElement.classList.value);
           e.target.className="btn btn-primary";
        }
        
       // console.log(e);
      // console.log(e.target.className);
       
    }

    click_btn(e){
        e.stopPropagation(); //nếu không có dòng này thì khi click sẽ chạy cả hàm click_div()
        console.log("Btn");
    }
    click_div(){
        console.log("Div");
    }
       
    onkeyup(e): void{
        if(e.which==13){
            //console.log(e.target.value);
            //chèn vào thẻ p
            jQuery("#resuls-tag").append('<span class="label label-info">' + e.target.value + '</span> ');
            e.target.value="";
        }
    }

    //two way binding
    name:string="";

}