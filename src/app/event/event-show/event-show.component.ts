import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../../services/auth/auth.service';


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
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.params.forEach(param => {
      console.log('param id is', param.id)
      this.eventService.getOneEvent(param.id)
      .subscribe(response => {
        // console.log('show', response.json().event)
        // console.log(response.json())
        this.oneEvent = response.json().event
      })
    })
  }

}
