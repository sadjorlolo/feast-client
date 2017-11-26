import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment} from '../../environments/environment'
import { AuthService } from '../services/auth/auth.service'

@Injectable()
export class EventService {

  getAllEvents() {
    console.log('get all events?')
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    console.log('config is', config)

    return this.http.get('http://localhost:4741/events', config);
  }

  constructor(private http: Http, private auth: AuthService) { }

}
