import { Component } from '@angular/core';

//định nghĩa một interface
interface person{
    name: string;
    email:string;
}

@Component({
    selector: "app-form",
    templateUrl: "./formValidate.component.html"
})

export class formComponent{
    //tạo một đối tượng personInfo
    personInfo:person ={name: "", email: ""};

    elements:string[]=["name","email"];
    //tạo 3 biến kiểm tra xem tên và email của đối tượng có hợp lệ hay không
    validName:boolean=false;
    validEmail:boolean=false;
    onSummit:boolean=false; //kiểm tra xem nút summit có họp lệ đẻ mở không

    setClass(type:string){
        if( type !=""){
            return "has-feedback";
        }
    }

    //hàm showLable()
    showLabel(label:string):string{
        return label.charAt(0).toUpperCase()+label.slice(1) ; //ký tự đầu tiên viết hoa sau đó cộng các ký tự còn lại
    }

    oninputChage(e , type:string){
        if(type=="name"){
            this.personInfo.name=e.target.value;
                 
        }if(type=="email"){
            this.personInfo.email=e.target.value;
           
        }
    }

    //nếu summit được nhấn đồng thời phái có 4 ký tự trở lên nhập và0
    showSpanOk(type:string):boolean{
        if(type=="name"){                
           return ( this.onSummit ==true && this.validName==true);           
        }
        return ( this.onSummit ==true && this.validEmail==true);
    }

    showSpanError(type: string){        
        if(type=="name"){
            return ( this.onSummit==true && this.validName==false);           
        }
        return ( this.onSummit == true && this.validEmail==false);        
    }

    setDisabledButton(){
        return ( this.personInfo.name !="" && this.personInfo.email !="");
    }

    clickButton(){             
        this.onSummit=true;   
        
        if(this.personInfo.name.length>=4) {            
            this.validName=true;
        }
        else{
            this.validName=false;
        }
        /*
        let kt: any=/^[a-z][a-z0-9_\.]{2.32}@[a-z0-9\-]{3,}(\.[a-z]{2,4}){1,2}$/;        
        if(kt.test(this.personInfo.email)==true){
            this.validEmail=true;
        }else{
            console.log("abc");
            this.validEmail=false;
        }
        */

        
        if(this.personInfo.email.length>=4) {
            this.validEmail=true;
        }else{
            this.validEmail=false;
        }
       
        
    }

}