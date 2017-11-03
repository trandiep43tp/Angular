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

    //hàm showLable()
    showLabel(label:string):string{
        return label.charAt(0).toUpperCase()+label.slice(1) ; //ký tự đầu tiên viết hoa sau đó cộng các ký tự còn lại
    }

}