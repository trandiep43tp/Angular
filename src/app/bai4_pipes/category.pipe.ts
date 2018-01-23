
import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'category'   
})  
export class categoryPipes implements PipeTransform{     
    transform(value: string[] ): string {                 
       //khai báo một mảng
       let art: string[]=[];
       if(value){
           value.forEach(x =>{
               //kiểm tra x xem có tồn tại trong arrt chưa
               if(art.indexOf(x)<=-1){
                   art.push(x);
               }
           })
       }  
       return art.join(", ");     //join là phương thức chuyển một mảng thành một chuỗi cách nhau bởi ký tự đưa vào 
                            
    }
}

