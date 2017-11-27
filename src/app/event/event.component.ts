import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
