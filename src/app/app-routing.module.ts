import { NgModule }              from '@angular/core';   //nó là 1 mudule nên phải import ngMudole vào
import { Routes, RouterModule }  from '@angular/router'; 
import {CommonModule}            from '@angular/common';   //phải import vào mới use được các ngFor
import { contactModule }         from './bai10_routting/contact.module';  //import modunle tự tạo

import { contactComponent }      from './bai10_routting/contact.component';
import { detailComponent }       from './bai10_routting/detail.component';
import { pagenotfoundComponent } from './bai10_routting/page-not-found.component';

// tạo một mảng routing 

 const routerConfig: Routes= [                        //nên đặt dưới cùng chứ k nó k nhận được component
   //{ path:'contact', component: contactComponent},
   { path: 'detail', component: detailComponent},
   { path: 'detail/:id/:name/:phone', component: detailComponent},
   { path: '', redirectTo: '/contact', pathMatch: 'full'},   //mở trang web lên mặc định vào trang contact
   { path: '**', component: pagenotfoundComponent}        //nếu k tìm thấy đường dẫn thì hiện trang pagenotfound lên

 ];

 @NgModule({
     declarations: [
         // contactComponent,
          detailComponent,
          pagenotfoundComponent
        ],
     imports: [
        contactModule,                         //module tự tạo
        RouterModule.forRoot(routerConfig),
        CommonModule                           //chú ý phải thêm commonmodule vào mới sd được ngfor
      ],  
     exports: [RouterModule]
 })

 export class appRoutingModule{}
