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
    glyphicon_name:boolean=false;
    glyphicon_show:boolean=true;
    check_name(e){
        //this.ten=e.target.value;
        if(e.which==13){
            if(this.ten.length>=4){
                this.glyphicon_name=true;
                this.glyphicon_show=true;
             }
             else{
                 this.glyphicon_name=true;
                 this.glyphicon_show=false;
             }            
        }
        else{
            this.glyphicon_name=false;
        }
       
        
    }
    hien_class(){
        return{
            'glyphicon-ok' : this.glyphicon_show,
            'glyphicon-warning-sign': !this.glyphicon_show
        }
        
    }
}