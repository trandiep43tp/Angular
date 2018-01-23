import { Component, Input } from '@angular/core';
@Component ({
    selector: "bai3-app-template",
    templateUrl: "./template.component.html"
})

export class templateComponent{
    titleTemplate:string="Template Component";
    @Input("color") templateColor: string;


    
    

}