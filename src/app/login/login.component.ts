import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // New user object. Used to fix template binding (?)
  newUser = <any>{};

  // User object. Used to fix template binding (?)
  user = <any>{};

  // Not bound to multiple inputs. No object needed.
  oldPassword: string;
  newPassword: string;

  constructor(
    public auth: AuthService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.auth.signOut();
  }

  signIn() {
    this.auth.signIn(this.user.email,
                     this.user.password)
    this.user = {}

  }

  changePassword() {
    this.auth.changePassword(this.oldPassword,
                             this.newPassword)
    this.oldPassword = ''
    this.newPassword = ''
  }

  signUp() {
    if (!this.newUser.email) {
      this._flashMessagesService.show('Email is required!')
      this.newUser = {}
    } else if (!this.newUser.password) {
      this._flashMessagesService.show('Password is required!')
      this.newUser = {}
    } else if (!this.newUser.password_confirmation) {
      this._flashMessagesService.show('Password Confirmation is required!')
      this.newUser = {}
    } else {
      this.auth.signUp(this.newUser.email,
        this.newUser.password,
        this.newUser.password_confirmation)
        this.newUser = {}
    }
  }


}
