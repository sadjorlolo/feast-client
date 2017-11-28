import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InviteesService } from '../invitees.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.inviteesService.getOneInvite(param.id)
      .subscribe(response => {
        // console.log(response.json().invitee)
        this.oneInvite = response.json().invitee
      })
    })
  }

}
