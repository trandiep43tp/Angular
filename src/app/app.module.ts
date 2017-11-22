import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //phải import mới sử dụng được two way binding

import { AppComponent } from './app.component';
import { bindingComponent} from './binding/binding.component';
import { builtindirective } from './built-in-directives/built-in-directive.component';
import { baitapcomponent } from './built-in-directives/baitap.component';
import { formComponent } from './built-in-directives/formValidate.component';
import { settingcolorComponent } from './settingColor/settingcolor.component';
import { controlComponent } from './settingColor/control.component';
import { templateComponent } from './settingColor/template.component';
import { pipesComponent } from './project4/pipes.component';
import { projectComponent } from './project4/baitap/project.component';
import { controlProject4Component } from './project4/baitap/controlProject4.component';
import { courseComponent } from './project4/baitap/course.component';
//import http
import { HttpModule } from '@angular/http';

//import pipes
import { capitalisePipes } from './project4/Capitalize.pipe';  //import custompipes và cũng đăng ký ở bên dưới
import { arrayPipes } from './project4/array.pipe';
import { summaryPipes } from './project4/summary.pipe';
import { categoryPipes } from './project4/category.pipe';
import { courseCategoryPipes } from './project4/category1.pipe';
import { BookComponent } from './book/book.component';
import { BookChildComponent } from './book/bookChild.component';
import { Book1Component } from './book/book1.component';


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
    
    //các pipes
    pipesComponent,
    capitalisePipes,
    arrayPipes,
    summaryPipes,
    categoryPipes,    
    courseCategoryPipes
    
  ],
  imports: [
    BrowserModule,
    FormsModule,     //phải import mới sử dụng được two way binding
    HttpModule  //phải import mới sử dung được 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
