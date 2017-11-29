import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InviteesService } from '../invitees.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { EventShowComponent } from '../../event/event-show/event-show.component';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';



@Component({
  selector: 'app-invitee-new',
  templateUrl: './invitee-new.component.html',
  styleUrls: ['./invitee-new.component.css'],
})


export class InviteeNewComponent implements OnInit {

  @Input() event_id;


  constructor(
    private route: ActivatedRoute,
    private inviteesService: InviteesService,
    public auth: AuthService,
    private router: Router,
    private eventShow: EventShowComponent,
    private _flashMessagesService: FlashMessagesService
  ) { }

  newInvitee: string;


  saveInvitee(invitee) {
    this.inviteesService.saveInvitee(invitee)
      // console.log('invitee is', invitee)
      .subscribe(response => {
      console.log('response is', response.json().invitee.event_attendee)
      console.log('eventshow', this.eventShow.oneEvent)
        this.eventShow.oneEvent.event_attendees.push(response.json().invitee.event_attendee)
      // this.eventService.getOneEvent(this.event_id)
        // console.log('save invite', response.json())
        // console.log('invitee event id', response.json().invitee.attended_event.id)
      })
      console.log('router nav invitee is', invitee)
      // this.router.navigate(["/events/" + invitee.invitee.event_id])
  }

  getInvitee(newInvitee) {
    console.log('newInvitee is', newInvitee)
    console.log('event_id is', this.event_id)
    this.inviteesService.getInvitee()
      .subscribe(response => {
        console.log('all users response is', response.json().users)
        let users = response.json().users
        let invitee = users.find(user => user.email == newInvitee)
        console.log('the invitation is for ', invitee)

        let invitation = {
          "invitee": {
            "user_id": invitee.id,
            "event_id": this.event_id
          }
        }
        this.saveInvitee(invitation)
        this.newInvitee = ''

      })
  }

  ngOnInit() {
  }

}
