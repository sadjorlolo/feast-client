import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';


@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private eventService: EventService,
      public auth: AuthService,
      private router: Router,
      private _flashMessagesService: FlashMessagesService
    ) { }

    newEvent = <any>{};

    saveEvent(newEvent) {
      this.eventService.saveEvent(newEvent)
        .subscribe(response => {
          this._flashMessagesService.show('Event has been saved successfully!')
          this.router.navigate(["/events/" + response.json().event.id])
        }, err => {
          this._flashMessagesService.show('Something went wrong. Please try again.')
        })
    }

  ngOnInit() {
  }

}
