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


import { capitalisePipes } from './project4/Capitalize.pipe';  //import custompipes và cũng đăng ký ở bên dưới
import { arrayPipes } from './project4/array.pipe';
import { summaryPipes } from './project4/summmary.pipe';


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
    pipesComponent,
    capitalisePipes,
    arrayPipes,
    summaryPipes
    
  ],
  imports: [
    BrowserModule,
    FormsModule     //phải import mới sử dụng được two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
