import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  updatedEvent = <any>{};

  constructor(private auth: AuthService,
              private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.eventService.getOneEvent(param.id)
      .subscribe(response => {
        console.log('updatedEvent response.json', response.json())
        this.updatedEvent = response.json().event
      })
    })
  }

  updateEvent(updatedEvent) {
    console.log('updating event')
    this.eventService.updateEvent(updatedEvent)
      .subscribe(response => {
        console.log('updateEvent response', response.json())
        let event = response.json().event
        this.router.navigate(["/events/" + event.id])

      })
  }

}
