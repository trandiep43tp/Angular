import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component ({
    selector: "app-control",
    templateUrl: "./control.component.html"
})

export class controlComponent{
    @Input("color") controlColor: string;
    @Output ("requestColor") myRequest = new EventEmitter<string>();

    changeColor(value:string){
        this.myRequest.emit(value);
        //console.log(value);
    }
}