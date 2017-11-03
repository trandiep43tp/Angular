import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //phải import mới sử dụng được two way binding

import { AppComponent } from './app.component';
import {bindingComponent} from './binding/binding.component';
import { builtindirective } from './built-in-directives/built-in-directive.component';
import { baitapcomponent } from './built-in-directives/baitap.component';
import {formComponent } from './built-in-directives/formValidate.component';

@NgModule({
  declarations: [
    AppComponent,
    bindingComponent,
    builtindirective,
    baitapcomponent,
    formComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule     //phải import mới sử dụng được two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
