import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { EventRoutingModule } from './event/event-routing.module';
// import { EventModule } from './event/event.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
// import { EventComponent } from './event/event.component';
import { EventModule } from './event/event.module';
// import { EventIndexComponent } from './event/event-index/event-index.component';
import { EventService } from './event/event.service';
import { InviteesComponent } from './invitees/invitees.component';
import { InviteesService } from './invitees/invitees.service';
import { InviteesModule } from './invitees/invitees.module';
import { InviteesRoutingModule } from './invitees/invitees-routing.module';
// import { EventShowComponent } from './event/event-show/event-show.component';
// import { EventNewComponent } from './event/event-new/event-new.component';
// import { EventUpdateComponent } from './event/event-update/event-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    InviteesComponent,
    // EventComponent,
    // EventIndexComponent,
    // EventShowComponent,
    // EventNewComponent,
    // EventUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EventModule,
    EventRoutingModule,
    InviteesModule,
    InviteesRoutingModule
  ],
  providers: [AuthService, EventService, InviteesService],
  bootstrap: [AppComponent]
})
export class AppModule { }