import { Component } from "@angular/core";

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


    ten:string="Trần văn Điệp";
    namsinh: number=1983;
    sothich={ game:"Liên minh" , hoc:"toán"};
    mang:string[]=["Một","Hai","ba"];
    hinh: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-3C79zymRF0hsIUQyQKOu28SDfZ-MMeu2ozdcnz-2jx0pFIm0A";
    link: string="https://angular.io/";

    mac_ao:boolean= true;
    mauchu:string="pink";


    click_hinh(e){
        //alert("Bạn vừa click hình");        
        //console.log("Bạn vừ click hình");
        alert(e.clientY);
        //thay đổi thuộc tính cho hình
        e.srcElement.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-3C79zymRF0hsIUQyQKOu28SDfZ-MMeu2ozdcnz-2jx0pFIm0A";
    }

    click(e){
        if(e.toElement.classList.value=="btn btn-primary"){
           // alert(e.toElement.classList.value);
            e.toElement.classList.value="btn btn-danger";
        }
        else{
           // alert(e.toElement.classList.value);
            e.toElement.classList.value="btn btn-primary";
        }
                
       // console.log(e);
       
    }
}