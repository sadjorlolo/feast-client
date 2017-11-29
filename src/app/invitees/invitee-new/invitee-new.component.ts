import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InviteesService } from '../invitees.service';
import { AuthService } from '../../services/auth/auth.service';

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
    public auth: AuthService
  ) { }

  newInvitee: string;

  saveInvitee(invitee) {
    this.inviteesService.saveInvitee(invitee)
      .subscribe(response => {
        console.log('save invite', response.json())

      })
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

      })
  }

  ngOnInit() {
  }

}
