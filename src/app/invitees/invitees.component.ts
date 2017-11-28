import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-invitees',
  templateUrl: './invitees.component.html',
  styleUrls: ['./invitees.component.css']
})
export class InviteesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
