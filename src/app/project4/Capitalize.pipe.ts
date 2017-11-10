/*
cách tạo custom pipes:
B1: tạo 1 file custom.pipe.ts có khung như bên dưới sau đó cũng import và export như bình thường

        import {Pipe, PipeTransform } from '@angular/core';        
        @Pipe({
            name: 'tên pipe'   
        })  
        export class class_pipe implements PipeTransform{            
            transform(value: any, ...arg: any[]): any {
               
            }
        }


B2: cũng đăng ký như component trong file app.module.ts

*/


import {Pipe, PipeTransform } from '@angular/core';

//định nghĩa tên của pipe này
@Pipe({
    name: 'capitalize'   
})  
export class capitalisePipes implements PipeTransform{
    //do nó được implement từ pipes transform nên phải định nghĩa lại phương thức. 
    transform(value: string): string {
            return value.replace(/\w\S*/g, function(txt){
               // console.log(txt);
               let str=txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
               return str;
            })
    }
}

