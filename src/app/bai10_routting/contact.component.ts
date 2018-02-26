import { Component } from '@angular/core';

@Component({
    selector: 'bai10-app-contact',
    templateUrl: './contact.component.html'
})

export class contactComponent {
     contacts=[
        { id: 1, name: 'tý', phone: '1234'},
        { id: 2, name: 'tèo', phone: '5678'},
        { id: 3, name: 'tủn', phone: '4567'}
    ];
    
}