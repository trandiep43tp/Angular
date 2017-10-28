import { Component } from '@angular/core';

@Component({
    selector: "app-built",
    templateUrl: "./built-in-directive.component.html"
})

export class builtindirective{
    //viết cho Ng if
    ishow:boolean=true;

     //viết cho Ng For
     courses:string[]=["C","PHP","java"];
    


}