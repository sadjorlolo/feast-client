import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { EventRoutingModule } from './event/event-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { EventComponent } from './event/event.component';
import { EventIndexComponent } from './event/event-index/event-index.component';
import { EventService } from './event/event.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EventComponent,
    EventIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EventRoutingModule,
  ],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
