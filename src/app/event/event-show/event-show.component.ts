import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';


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
    private auth: AuthService,
    private router: Router
  ) { }

  deleteEvent(event) {
    // console.log('show ts event is', event)
    this.eventService.deleteEvent(event)
      .subscribe(response => {
        this.router.navigate(["/events"]);
      })
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      // console.log('param id is', param.id)
      this.eventService.getOneEvent(param.id)
      .subscribe(response => {
        this.oneEvent = response.json().event
      })
    })
  }

}
