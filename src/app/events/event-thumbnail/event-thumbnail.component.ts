import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/interfaces/event';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event! : Event;
 

  constructor() { }

 
  ngOnInit(): void {
  }
persona = {
  name: "Diego",
  lasName: "Molina"
}



 

}
