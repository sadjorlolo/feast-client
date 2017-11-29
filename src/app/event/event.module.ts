import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { EventComponent } from './event.component';
import { EventIndexComponent } from './event-index/event-index.component';
import { EventShowComponent } from './event-show/event-show.component';
// import { EventRoutingModule } from './event-routing.module';
import { EventService } from './event.service';
import { EventNewComponent } from './event-new/event-new.component';
import { EventUpdateComponent } from './event-update/event-update.component';

import { InviteeNewComponent } from '../invitees/invitee-new/invitee-new.component';


@NgModule({
  declarations: [
    EventComponent,
    EventIndexComponent,
    EventShowComponent,
    EventNewComponent,
    EventUpdateComponent,
    InviteeNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [EventService],
})
export class EventModule { }
