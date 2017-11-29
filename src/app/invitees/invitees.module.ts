import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InviteeIndexComponent } from './invitee-index/invitee-index.component';
import { InviteeShowComponent } from './invitee-show/invitee-show.component';
// import { InviteeNewComponent } from './invitee-new/invitee-new.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    InviteeIndexComponent,
    InviteeShowComponent,
    // InviteeNewComponent,
  ]
})
export class InviteesModule { }
