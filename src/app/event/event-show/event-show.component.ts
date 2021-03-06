import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { InviteesService } from '../../invitees/invitees.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';



@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {

  oneEvent;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    public auth: AuthService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  deleteEvent(event) {
    this.eventService.deleteEvent(event)
      .subscribe(response => {
        this._flashMessagesService.show('Event deleted!')
        this.router.navigate(["/events"]);
      }, err => {
        this._flashMessagesService.show('Something went wrong. Please try again.')
      })
  }

  deleteInvitee(invitee, oneEvent){
    this.eventService.deleteInvitee(invitee)
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.eventService.getOneEvent(param.id)
      .subscribe(response => {
        this.oneEvent = response.json().event
      }, err => {
        this._flashMessagesService.show('Something went wrong. Please try again.')
      })
    })
  }

}
