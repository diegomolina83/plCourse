import { Component } from "@angular/core";

@Component({
    selector:'events-list',
    templateUrl:'events-list.component.html'
})

export class EventsListComponent {
    title:string = "Events List"; 
    event = {
        id:1,
        name:'Angular Connect',
        date:'9/26/2046',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: ' Melilla street',
            city: 'Albacete',
            country: 'Spain'
        }    
    }
}