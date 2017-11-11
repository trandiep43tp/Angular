import {Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'summary'   
})  
export class summaryPipes implements PipeTransform{    
    transform(value: string, ...args: any[]): string {
        //console.log(value);
       // console.log(args[0]);
         let totalcharactor:number=20;
         let charractor: string="....";
            for(let x of args){
                if(typeof(x)=='number'){
                    totalcharactor=x
                }else{
                    charractor=x;
                }
            }
            return value.substring(0,totalcharactor) + charractor;

            
    }
}

