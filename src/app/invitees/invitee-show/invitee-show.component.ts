import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InviteesService } from '../invitees.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';


@Component({
  selector: 'app-invitee-show',
  templateUrl: './invitee-show.component.html',
  styleUrls: ['./invitee-show.component.css']
})
export class InviteeShowComponent implements OnInit {

  oneInvite;

  constructor(
    private route: ActivatedRoute,
    private inviteesService: InviteesService,
    public auth: AuthService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  deleteInvite(oneInvite) {
    this.inviteesService.deleteInvite(oneInvite)
    .subscribe(response => {
      this._flashMessagesService.show('Your invitation has been deleted.')
      this.router.navigate(["/invitees"]);

    }, err => {
      this._flashMessagesService.show('Something went wrong. Please try again.')
    })
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.inviteesService.getOneInvite(param.id)
      .subscribe(response => {
        this.oneInvite = response.json().invitee
      }, err => {
        this._flashMessagesService.show("Something went wrong. Please try again.")
      })
    })
  }

}
