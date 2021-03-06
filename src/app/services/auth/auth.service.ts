import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';


@Injectable()
export class AuthService {
  user: any;

  constructor(
    private http: Http,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  getUserToken() {
    return this.user.token
  }

  signIn(email: string, password: string) {
    // Create the Credentials object
    let credentials = {
      'credentials': {
        'email': email,
        'password': password
      }
    }

    // Make the POST request. environment.apiOrigin contains the local apiOrigin
    // address http://localhost:4741
    this.http.post(environment.apiOrigin + '/sign-in', credentials)
      .subscribe(
        // Save the response to User
        response => {
          this._flashMessagesService.show('Sign in successful!');
          return this.user = JSON.parse(response['_body']).user
        },
        err => {
          this._flashMessagesService.show('Sign in not successful!');
        }
      )
  }

  signUp(email: string, password: string, password_confirmation: string) {
    // Create the credentials object
    const credentials = {
      'credentials': {
        'email': email,
        'password': password,
        'password_confirmation': password_confirmation
      }
    }

    // Make the POST request. environment.apiOrigin contains the localhost
    // server address http://localhost:4741
    this.http.post(environment.apiOrigin + '/sign-up', credentials)
      .subscribe(
        response => {
          this._flashMessagesService.show('Sign up successful!');
          // Send the existing credentials back to the server to log in
          // the new user.
          this.signIn(credentials.credentials.email,
                      credentials.credentials.password)

        },
        err => {
          this._flashMessagesService.show('Sign up not successful!');
        }
      )
  }

  signOut() {
    // Create the configuration object to be able to store the
    // Headers > Authentication
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken() }

    // Make the delete request to the URL, and add the token from config.
    this.http.delete(environment.apiOrigin + '/sign-out/' + this.user.id, config)
      .subscribe(
        // Remove the logged in User
        data => {
        this._flashMessagesService.show('Sign out successful!');
        this.user = null
        this.router.navigate(["/"])
      },
        err => {
          // this.user = null
          this._flashMessagesService.show('Sign out not successful! Please refresh.');

        }
      )
  }

  changePassword(oldPassword: string, newPassword: string) {
    // Create the passwords object to send
    let passwords = {
      'passwords': {
        'old': oldPassword,
        'new': newPassword
      }
    }

    // Create the configuration objectto be able to store the
    // Headers > Authentication
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken() }

    // Make the patch request to URL,
    // Add the password data and token from Config.
    this.http.patch(environment.apiOrigin + '/change-password/' + this.user.id,
                    passwords,
                    config)
      .subscribe(
        data => {
          this._flashMessagesService.show('Password changed successfully!');
        },
        err => {
          this._flashMessagesService.show('Password change not successful!');
        }
      )
  }

}
