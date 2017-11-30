import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment} from '../../environments/environment'
import { AuthService } from '../services/auth/auth.service'

@Injectable()
export class EventService {

  getAllEvents() {
    // console.log('get all events?')
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    // console.log('config is', config)

    return this.http.get(`${environment.apiOrigin}/events`, config);
    // return this.http.get('http://localhost:4741/events', config);
  }

  getOneEvent(eventId) {
    console.log('get one event?')
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    // console.log('getOne config is', config)
    // console.log('what i return is', this.http.get(`${environment.apiOrigin}/events/${eventId}`, config).json())
    return this.http.get(`${environment.apiOrigin}/events/${eventId}`, config)
  }

  saveEvent(newEvent) {
    // console.log('will this event save?')
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
    // console.log('event is', event)
    return this.http.post(`${environment.apiOrigin}/events`, event, config);
  }

  updateEvent(updatedEvent) {
    // console.log('updatedEvent run?')
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
    // console.log('delete evet is', event)
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    return this.http.delete(`${environment.apiOrigin}/events/${event.id}`, config);
  }

  deleteInvitee(invitee) {
    console.log('delete service invitee is', invitee)
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    // return this.http.delete(`${environment.apiOrigin}/invitees/${event.id}`, config);
  }

  constructor(private http: Http,
              public auth: AuthService) { }

}
