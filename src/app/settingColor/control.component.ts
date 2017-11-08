import { Component,Input,Output, EventEmitter } from '@angular/core';
@Component ({
    selector: "app-control",
    templateUrl: "./control.component.html"   

})

export class controlComponent{
    @Input("color") scolor: string;
    @Output("requestColor") myColor = new EventEmitter<string>();

    changeColor(value:string){
        this.myColor.emit(value);
    }
}