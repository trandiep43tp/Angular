import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router'; //phải import mới lấy được id
@Component({
    selector: 'bai10-app-detail',
    template: `
        <p>Trang detail</p>
        <p>id: <b>{{id}}</b></p>
        <p>Name: <b>{{name}}</b></p>
        <p>Phone: <b>{{phone}}</b></p>
    `
})

export class detailComponent{
    id:string;
    name: string;
    phone: string;
    constructor(private router: ActivatedRoute){
        this.router.paramMap.subscribe((params: ParamMap)=>{
           // console.log(params.get('id'));
           this.id=params.get('id');
           this.name= params.get('name');
           this.phone= params.get('phone');
        });
    }
}