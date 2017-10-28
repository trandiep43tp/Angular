import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //phải import mới sử dụng được two way binding

import { AppComponent } from './app.component';
import {bindingComponent} from './binding/binding.component';
import { builtindirective } from './built-in-directives/built-in-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    bindingComponent,
    builtindirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule     //phải import mới sử dụng được two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
