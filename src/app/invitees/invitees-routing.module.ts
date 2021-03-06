import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InviteesComponent } from './invitees.component';
import { InviteeIndexComponent } from './invitee-index/invitee-index.component';
import { InviteeShowComponent } from './invitee-show/invitee-show.component';

const inviteeRoutes: Routes = [
  {
    path: "invitees",
    component: InviteesComponent,
    children: [
      {
        path: "",
        component: InviteeIndexComponent
      },
      {
        path: ":id",
        component: InviteeShowComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(inviteeRoutes)

  ],
  exports: [RouterModule],
  declarations: []
})
export class InviteesRoutingModule { }
