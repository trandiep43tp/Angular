import { Component } from '@angular/core';
@Component ({
    selector: "app-baitap",
    templateUrl: "./baitap.component.html"
})

export class baitapcomponent{

    status: string="Đây là bài tập vote status";
    showvote:boolean=false;
    votes:string[]=["Like","Wow","Ha ha", "Angy"];
    name:string=this.votes[0];

    change_show( val:boolean ){        
        this.showvote=val;       
    }    

    change_name(str:string){
        this.name=str;
       // console.log(e.target.text);
        this.change_show(false);

    }


    //form validate
    ten:string="";
    email:string="";
    glyphicon_name:boolean=false;
    check_name(e){
        this.ten=e.target.value;
        
        if(this.ten.length>=4){
           this.glyphicon_name=true;
        }
        
    }
}