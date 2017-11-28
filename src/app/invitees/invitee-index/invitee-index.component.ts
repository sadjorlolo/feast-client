import { Component, OnInit } from '@angular/core';
import { InviteesService } from '../invitees.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-invitee-index',
  templateUrl: './invitee-index.component.html',
  styleUrls: ['./invitee-index.component.css']
})
export class InviteeIndexComponent implements OnInit {

  allInvites = [];

  constructor(
    private inviteesService: InviteesService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.inviteesService.getAllInvites()
      .subscribe(response => {
        console.log(response.json().invitees)
        this.allInvites = response.json().invitees
      })
  }

}
