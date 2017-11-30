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
    // private inviteesService: InviteesService
  ) { }

  deleteEvent(event) {
    // console.log('show ts event is', event)
    this.eventService.deleteEvent(event)
      .subscribe(response => {
        this._flashMessagesService.show('Event deleted!')
        this.router.navigate(["/events"]);
      }, err => {
        this._flashMessagesService.show('Something went wrong. Please try again.')
      })
  }

  deleteInvitee(invitee, oneEvent){
    console.log('deleteinvitee invitee is', invitee)
    console.log('oneEvent is', oneEvent)
    this.eventService.deleteInvitee(invitee)
  }

  // saveEvent(newEvent) {
  //   this.InviteesService
  // }

  ngOnInit() {
    this.route.params.forEach(param => {
      console.log('param id is', param.id)
      this.eventService.getOneEvent(param.id)
      .subscribe(response => {
        this.oneEvent = response.json().event
      }, err => {
        this._flashMessagesService.show('Something went wrong. Please try again.')
      })
    })
  }

}
