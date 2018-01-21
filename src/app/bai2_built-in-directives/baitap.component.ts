import { Component } from '@angular/core';
@Component ({
    selector: "bai2-app-baitap",
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
    flagName:boolean= false;
    iconName:string= "";

    email:string="";
    flagEmail:boolean=false;
    iconEmail:string="";

    checkButton:boolean=false;      //biến theo dõi khóa nút button

    checkName(e){
        if(e.which==13){
            this.ten=e.target.value;

            if(this.ten.length>=4){
                this.flagName=true;
                this.iconName="glyphicon-ok";
                if(this.flagEmail && this.iconEmail=="glyphicon-ok")  this.checkButton=true;  //kiểm tra nếu email đã nhập đúng
             }
             else{
                 this.flagName=true;
                 this.iconName="glyphicon-warning-sign";
                 this.checkButton=false;
                 
                 
             }   
                      
        }
        else{
            this.flagName=false;
        }            
    }

    checkEmail(e){
        if(e.which==13){
            this.email=e.target.value;
            if(this.email.length>=4){
                this.flagEmail=true;
                this.iconEmail="glyphicon-ok";
                if(this.flagName && this.iconName=="glyphicon-ok") this.checkButton=true;
            }
            else{
                this.flagEmail=true;
                this.iconEmail="glyphicon-warning-sign";
                this.checkButton=false;
            }

        }
        else{
            this.flagEmail=false;
        }

    }
    
}