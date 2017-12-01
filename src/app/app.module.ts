import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module.js';

import { AppRoutingModule } from './app-routing.module';
import { EventRoutingModule } from './event/event-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { EventModule } from './event/event.module';
import { EventService } from './event/event.service';
import { InviteesComponent } from './invitees/invitees.component';
import { InviteesService } from './invitees/invitees.service';
import { InviteesModule } from './invitees/invitees.module';
import { InviteesRoutingModule } from './invitees/invitees-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    InviteesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EventModule,
    EventRoutingModule,
    InviteesModule,
    InviteesRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService, EventService, InviteesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
