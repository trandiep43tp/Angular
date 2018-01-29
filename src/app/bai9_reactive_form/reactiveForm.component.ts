import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';   //import cái này mới sử dụng được reactive form
//chú ý phải import ReactiveFormModule trong file app module.ts
import { FormBuilder } from '@angular/forms';  //thêm vào để viết code cách 2 cho ngắn
@Component ({
    selector: 'bai9-reactive-form',
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="formSignUp">                  
            <label>Email: </label> 
            <input class="form-control" placeholder="Email" formControlName="email" ><br>          
            <label>Passwords</label> 
            <input class="form-control" type="password" placeholder="Passwords" formControlName="pass">  <br> 
            <div formGroupName="thethao">   <!--form lồng-->
                <label><input type="checkbox"   formControlName="bongda">Bóng Đá</label>
                <label><input type="checkbox"   formControlName="bongban">Bóng Bàn</label>   <br>        
            </div>
            <button class="btn btn-primary" >Summit</button>                                    
        </form>    
    `
    
})

export class reactFormComponent{
    formSignUp: FormGroup;

    //cách 1
    /*
    constructor(){
        this.formSignUp= new FormGroup({
            email: new FormControl('trandiep43tp@gmail.com'),   //đưa giá trị mặc định vào
            pass:  new FormControl(),
            thethao: new FormGroup({                            //formGroup lồng
                bongda: new FormControl(true),                  // đưa giá trị mặc định vào
                bongban: new FormControl()
            })           
        });
    }
    */
    //cách 2 là sử dụng FormBuilder, có thể sử dụng oninit để khởi tạo ban đầu
    constructor(private fb:FormBuilder){
        this.formSignUp= fb.group({
            email: 'trandiep43tp@gmail.com',   
            pass:  '',
            thethao: fb.group({                            
                bongda: true,                  
                bongban: false
            })           
        });
    }

    onSubmit(){
        console.log(this.formSignUp.value);
    }
}