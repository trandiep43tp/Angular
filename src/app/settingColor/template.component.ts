import { Component, Input } from '@angular/core';
@Component ({
    selector: "app-template",
    templateUrl: "./template.component.html"
})

export class templateComponent{
    @Input("color") templateColor: string;


    ///cùng cấp
    inputmau: string="yellow";
    

}