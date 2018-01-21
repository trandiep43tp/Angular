import { Component } from '@angular/core';

@Component({
    selector: "bai2-app-built",
    templateUrl: "./built-in-directive.component.html",
    styleUrls: ["./built-in-directive.component.css"]
})

export class builtindirective{
    
    //viết cho Ng class
    canSave:Boolean=true;
    isUnchanged:boolean=false;
    isSpecial:boolean=false;

    
    currentClasses ={      
      
        'aoxanh': this.canSave,
        'aovang': this.isUnchanged,
        'aodo':  this.isSpecial
      
    };

    /*
    currentClasses1= {};
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

   //viết cho Ng if
   ishow:boolean=true;
    so:any="";
    hienthongbao(){
      if (isNaN(this.so)){
        return true
      }else{
        return false;
      }
    }

 //viết cho Ng Swicth
    lua_chon:number= 2;
    tab:string="";


    tab_click(e):void{
      //console.log(e.target.text);
      this.tab=e.target.text;  
    }
//viết cho Ng For
courses:string[]=["C","PHP","java"];
//cho mảng các đối tượng
arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];

  newEn: string="";
  newVn:string="";
  show: boolean=false;
  newWord(){
    //thêm vào đầu mảng dùng unshift, thêm vào cuối mảng dùng push
    if(!this.show){
      this.show=true;
    }else{
      this.arrWords.push({
        id: this.arrWords.length+1,
        en: this.newEn,
        vn: this.newVn,
        memorized: false
      });
      this.newEn='';
      this.newVn='';
      this.show=false;
    }
    
  }

    //viết cho demo
    text:string="";
    //mau_nen:string="";      

    constructor(){
      this.text="Angular 4"
    }

    doi_mau_nen(mau_nen,backgroundcolor,textcolor){
      
        console.log(mau_nen);
    }
}