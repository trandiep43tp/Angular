//cách tách router thành 1 module riêng


import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { contactComponent } from './contact.component';


//tạo một mảng routing
const routerConfig: Routes=[
    {path: 'contact', component: contactComponent}
];

@NgModule({
    declarations: [
        contactComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routerConfig)]    //chú ý là forChild chứ k phải forRoot
})

export class contactModule {

}