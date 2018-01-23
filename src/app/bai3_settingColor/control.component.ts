
import { Component,Input,Output, EventEmitter } from '@angular/core';
@Component ({
    selector: "bai3-app-control",
    templateUrl: "./control.component.html"   

})

export class controlComponent{
    titleControl: string="Control Component";
    @Input("color") scolor: string;
    @Output("requestColor") myColor = new EventEmitter<string>();

    changeColor(value:string){
        this.myColor.emit(value);

    }
}