import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class InviteesService {

  constructor(
    private http: Http,
    public auth: AuthService
  ) { }

  getAllInvites() {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }

    return this.http.get(`${environment.apiOrigin}/invitees`, config);

  }

  getOneInvite(inviteId) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() }
    return this.http.get(`${environment.apiOrigin}/invitees/${inviteId}`, config)
  }

}
