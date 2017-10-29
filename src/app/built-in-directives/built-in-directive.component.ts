import { Component } from '@angular/core';

@Component({
    selector: "app-built",
    templateUrl: "./built-in-directive.component.html",
    styleUrls: ["./built-in-directive.component.css"]
})

export class builtindirective{
    //viết cho Ng if
    ishow:boolean=true;

     //viết cho Ng For
     courses:string[]=["C","PHP","java"];

     //viết cho Ng Swicth
     lua_chon:number= 2;
     tab:string="";


     tab_click(e):void{
       // console.log(e.target.text);
      this.tab=e.target.text;  
    }
    
    //viết cho Ng class
    canSave:Boolean=false;
    isUnchanged:boolean=false;
    isSpecial:boolean=true;

    
    currentClasses() {      
      return  {
        'aoxanh': this.canSave,
        'aovang': this.isUnchanged,
        'aodo':  this.isSpecial
      };
    }

    /*
    currentClasses1: {};
    setCurrentClasses1() {
      
      this.currentClasses1 =  {          
            'aoxanh': this.canSave,
            'aovang': this.isUnchanged,
            'aodo':  this.isSpecial           
       };      
    }
    */


    //viết cho ng Style    
    currentStyles() {      
      return {
        'font-style':  this.canSave      ? 'italic' : 'normal',
        'font-weight': this.isUnchanged ? 'bold'   : 'normal',
        'font-size':   !this.isSpecial    ? '24px'   : '12px',
        'color':        this.isSpecial ? 'red' : 'pink'
      };
    }
}