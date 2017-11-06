//nhớ phải thêm input để truyền dữ liệu từ appComponent về setting Component
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-setting",
    templateUrl: "./settingcolor.component.html",
    inputs: ["stitle:mtitle","mMota"]
})
 //lấy dữ liệu từ appcomponent truyền vào
//cách 2 chèn inputs vào @Component
export class settingcolorComponent{
    callPhone(value:string){
        console.log(value);
    }

    //lấy dữ liệu từ appcomponent truyền vào
    //cách 1
    //@Input("mtitle") stitle: string;
    //@Input("mMota") sMota: string;


    //đẩy dữ liệu lên appcomponent
    @Output ("answerRequest") myRequest=new EventEmitter<number>();

    onclick(value: number){
        this.myRequest.emit(value);
        //console.log(value);
    }
    










}