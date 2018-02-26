import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';  //phải import mới sử dụng được two way binding
import { HttpModule }            from '@angular/http';   //phải import mới sử dụng được http
import { ReactiveFormsModule }   from '@angular/forms';  //phải import mới sử dụng được Reactive form trong 
//import { appRoutingModule }      from './app-routing.module';  //import module tự tạo

import { AppComponent }          from './app.component';
import { bindingComponent}       from './bai1_binding/binding.component';

import { builtindirective }      from './bai2_built-in-directives/built-in-directive.component';
import { baitapcomponent }       from './bai2_built-in-directives/baitap.component';
import { formComponent }         from './bai2_built-in-directives/formValidate.component';

import { settingcolorComponent } from './bai3_settingColor/settingcolor.component';
import { controlComponent }      from './bai3_settingColor/control.component';
import { templateComponent }     from './bai3_settingColor/template.component';

import { pipesComponent }        from './bai4_pipes/pipes.component';
import { projectComponent }      from './bai4_pipes/baitap/project.component';
import { controlProject4Component } from './bai4_pipes/baitap/controlProject4.component';
import { courseComponent }       from './bai4_pipes/baitap/course.component';

import { BookComponent }         from './bai5_input_o_thamso/book.component';
import { BookChildComponent }    from './bai5_input_o_thamso/bookChild.component';
import { Book1Component }        from './bai5_input_o_thamso/book1.component';

import { ipComponent }           from './bai6_service/ip.component';
import { httpComponent }         from './bai6_service/http.component';

import { WeatherComponent }      from './bai7_weather/weather.component';

import { FormSignInComponent }   from './bai8_form/form.component';
import { Bai8FormComponent }     from './bai8_form_tach_service/form.component';

import { reactFormComponent }    from './bai9_reactive_form/reactiveForm.component';

import { bai11Component }        from './bai11_kiemtra/bai11.component';

//import pipes
import { capitalisePipes }       from './bai4_pipes/Capitalize.pipe';  //import custompipes và cũng đăng ký ở bên dưới
import { arrayPipes }            from './bai4_pipes/array.pipe';
import { summaryPipes }          from './bai4_pipes/summary.pipe';
import { categoryPipes }         from './bai4_pipes/category.pipe';
import { courseCategoryPipes }   from './bai4_pipes/category1.pipe';

import { appRoutingModule }      from './app-routing.module';  //import module tự tạo

//import service
import { ipService } from './bai6_service/ip.service';

@NgModule({
  declarations: [
    AppComponent,
    bindingComponent,
    builtindirective,
    baitapcomponent,
    formComponent,
    settingcolorComponent,
    controlComponent,
    templateComponent,
    projectComponent,
    controlProject4Component,
    courseComponent,   
    BookComponent,
    BookChildComponent,
    Book1Component,
    httpComponent,
    WeatherComponent,
    Bai8FormComponent,
    reactFormComponent,
    bai11Component,
       
    
   // ipService,
   ipComponent,
   
    //các pipes
    pipesComponent,
    capitalisePipes,
    arrayPipes,
    summaryPipes,
    categoryPipes,    
    FormSignInComponent,
    courseCategoryPipes
    
  ],
  imports: [
    BrowserModule,
    FormsModule,            //phải import mới sử dụng được two way binding
    HttpModule,             //phải import mới sử dung được 
    ReactiveFormsModule,     // phải import mới sử dụng được reactive form trong bài 8
    appRoutingModule          //import module mình tạo ra
  ],
  providers: [ipService ],  //khi sử dụng service cho nhiều component
  bootstrap: [AppComponent]
})
export class AppModule { }
