import { Component,Input } from '@angular/core';

@Component ({
    selector: "app-template",
    templateUrl: "./template.component.html"
})

export class templateComponent{
    titleTemplate:string="Template Component";
    @Input("color") scolor: string;
}