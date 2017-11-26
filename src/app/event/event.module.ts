import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { EventComponent } from './event.component';
import { EventIndexComponent } from './event-index/event-index.component';
// import { EventRoutingModule } from './event-routing.module';
import { EventService } from './event.service';


@NgModule({
  declarations: [
    EventComponent,
    EventIndexComponent
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
