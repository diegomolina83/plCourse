import { Component } from "@angular/core";
import { Event } from "../interfaces/event";

@Component({
    selector:'events-list',
    templateUrl:'./events-list.component.html'
})

export class EventsListComponent {
    eventList:Event[]=[
    {
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
    },
    {
        id:2,
        name:'React Connect',
        date:'9/26/2046',
        time: '10:00 am',
        price: 499.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: ' Melilla street',
            city: 'Albacete',
            country: 'Spain'
        } 
    }
    ];

  
}