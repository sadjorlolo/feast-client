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
      .subscribe(response => {
        if (response.json() !== null) {
          this.eventShow.oneEvent.event_attendees.push(response.json().invitee.event_attendee)
        } else {
          this._flashMessagesService.show('The user you selected is already an attendee.')
        }

      }, err => {
        this._flashMessagesService.show('Something went wrong. Please try again.')
      })
    }

  getInvitee(newInvitee) {
    if (!newInvitee) {
      this._flashMessagesService.show('Attendee Email is required!')
    } else {
      this.inviteesService.getInvitee()
        .subscribe(response => {
          let users = response.json().users
          let invitee = users.find(user => user.email == newInvitee)

          if (invitee !== undefined) {
            let invitation = {
              "invitee": {
                "user_id": invitee.id,
                "event_id": this.event_id
              }
            }

            this.saveInvitee(invitation)
          } else {
            this._flashMessagesService.show('The user you entered does not exist.')
          }
          this.newInvitee = ''

        }, err => {
          this._flashMessagesService.show('Something went wrong. Please try again.')
        })

    }

  }

  ngOnInit() {
  }

}
