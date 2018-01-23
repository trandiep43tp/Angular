
import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'array'   
})  
export class arrayPipes implements PipeTransform{     
    transform(value: number[], ...args: any[]): number[] {
           //return value.sort();    //xắp xếp tăng dần
           //return value.sort(function(a, b){return b - a}); //xắp xếp giảm dần         
          // console.log(value);
          //console.log(args);          
         
          for (let x of args){
              //lọc số chăn
              if(x=='odd'){
                value= value.filter(function(value){
                    return value % 2 !=0;
                })                
              }
              //lọc số lẻ
              if(x=='even'){
                value= value.filter(function(value){
                    return value % 2 ==0;
                })                
              }
              //xắp xếp tăng dần
              if(x=='sort'){
                value= value.sort(function(a,b){ return a-b});                
              }
          }
          return value;           
    }
}

