import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private eventService: EventService,
      public auth: AuthService
    ) { }

    newEvent = <any>{};

    saveEvent(newEvent) {
      // console.log('saving event')
      // console.log('newEvent is', newEvent)
      this.eventService.saveEvent(newEvent)
        .subscribe(response => {
          // console.log('newEvent response is', response.json())
          let event = response.json()

        })
    }

  ngOnInit() {
  }

}