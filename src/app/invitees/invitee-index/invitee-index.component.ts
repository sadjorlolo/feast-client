import { Component, OnInit } from '@angular/core';
import { InviteesService } from '../invitees.service';
import { AuthService } from '../../services/auth/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';


@Component({
  selector: 'app-invitee-index',
  templateUrl: './invitee-index.component.html',
  styleUrls: ['./invitee-index.component.css']
})
export class InviteeIndexComponent implements OnInit {

  allInvites = [];

  constructor(
    private inviteesService: InviteesService,
    public auth: AuthService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.inviteesService.getAllInvites()
      .subscribe(response => {
        this.allInvites = response.json().invitees
      }, err => {
        this._flashMessagesService.show('Something went wrong. Please try again.')
      })
  }

}
