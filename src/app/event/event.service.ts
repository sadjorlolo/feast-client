import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment} from '../../environments/environment'
import { AuthService } from '../services/auth/auth.service'

@Injectable()
export class EventService {

  getAllEvents() {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }

    return this.http.get(`${environment.apiOrigin}/events`, config);
  }

  getOneEvent(eventId) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    return this.http.get(`${environment.apiOrigin}/events/${eventId}`, config)
  }

  saveEvent(newEvent) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    let event = {
      "event": {
        "name": newEvent.name,
        "date": newEvent.date,
        "time": newEvent.time,
        "location": newEvent.location,
        "description": newEvent.description
      }
    }
    return this.http.post(`${environment.apiOrigin}/events`, event, config);
  }

  updateEvent(updatedEvent) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    let eventUpdate = {
      "event": {
        "name": updatedEvent.name,
        "date": updatedEvent.date,
        "time": updatedEvent.time,
        "location": updatedEvent.location,
        "description": updatedEvent.description
      }
    }
    return this.http.put(`${environment.apiOrigin}/events/${updatedEvent.id}`, eventUpdate, config);
  }

  deleteEvent(event) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    return this.http.delete(`${environment.apiOrigin}/events/${event.id}`, config);
  }

  deleteInvitee(invitee) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
  }

  constructor(private http: Http,
              public auth: AuthService) { }

}
