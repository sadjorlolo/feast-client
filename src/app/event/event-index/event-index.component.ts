import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../../services/auth/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';

@Component({
  selector: 'app-event-index',
  templateUrl: './event-index.component.html',
  styleUrls: ['./event-index.component.css']
})
export class EventIndexComponent implements OnInit {

  allEvents = [];

  constructor(private eventService: EventService,
              public auth: AuthService,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.eventService.getAllEvents()
      .subscribe(response => {
        this.allEvents = response.json().events;
      }, err => {
        this._flashMessagesService.show('Something went wrong. Try again.')
      })
  }

}
