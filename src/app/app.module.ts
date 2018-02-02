import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';  //phải import mới sử dụng được two way binding
import { HttpModule }            from '@angular/http';   //phải import mới sử dụng được httt
import { ReactiveFormsModule }   from '@angular/forms';  //phải import mới sử dụng được Reactive form trong 
import { Routes, RouterModule }  from '@angular/router';  //phải iporrt mới sử dụng được routing

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

import { contactComponent }      from './bai10_routting/contact.component';
import { detailComponent }       from './bai10_routting/detail.component';
import { routingComponent }      from './bai10_routting/routing.component';

//import pipes
import { capitalisePipes }       from './bai4_pipes/Capitalize.pipe';  //import custompipes và cũng đăng ký ở bên dưới
import { arrayPipes }            from './bai4_pipes/array.pipe';
import { summaryPipes }          from './bai4_pipes/summary.pipe';
import { categoryPipes }         from './bai4_pipes/category.pipe';
import { courseCategoryPipes }   from './bai4_pipes/category1.pipe';



//import service
import { ipService } from './bai6_service/ip.service';

// tạo một mảng routing 
 const routerConfig: Routes= [                        //nên đặt dưới cùng chứ k nó k nhận được component
   { path: 'routing', component: routingComponent},
   { path:'contact', component: contactComponent},
   { path: 'detail', component: detailComponent}


 ];



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
    contactComponent,
    detailComponent,
    routingComponent,
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
    RouterModule.forRoot(routerConfig)
   
  ],
  providers: [ipService ],  //khi sử dụng service cho nhiều component
  bootstrap: [AppComponent]
})
export class AppModule { }
