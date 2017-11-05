import { Component } from '@angular/core';

@Component({
    selector: "app-setting",
    templateUrl: "./settingcolor.component.html"
})

export class settingcolorComponent{
    callPhone(value:string){
        console.log(value);
    }
}