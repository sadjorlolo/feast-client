import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  updatedEvent = <any>{};

  constructor(public auth: AuthService,
              private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router,
              private _flashMessagesService: FlashMessagesService
            ) { }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.eventService.getOneEvent(param.id)
      .subscribe(response => {
        // console.log('updatedEvent response.json', response.json())
        this.updatedEvent = response.json().event
      }, err => {
        this._flashMessagesService.show('Something went wrong. Please try again.')
      })
    })
  }

  updateEvent(updatedEvent) {
    // console.log('updating event')
    console.log('updateEventis', updatedEvent)

    if (updatedEvent.name == null || updatedEvent.name == '') {
      this._flashMessagesService.show('You must have an event name.')
    } else {

      this.eventService.updateEvent(updatedEvent)
        .subscribe(response => {
          this._flashMessagesService.show('Event Updated!')
          // console.log('updateEvent response', response.json())
          let event = response.json().event
          this.router.navigate(["/events/" + event.id])

        }, err => {
          this._flashMessagesService.show('Something went wrong. Please try again.')
        })

    }


  }

}
