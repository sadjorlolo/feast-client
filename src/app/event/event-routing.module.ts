import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event.component';
import { EventIndexComponent } from './event-index/event-index.component';
import { EventShowComponent } from './event-show/event-show.component';
import { EventNewComponent } from './event-new/event-new.component';
import { EventUpdateComponent } from './event-update/event-update.component';

const eventRoutes: Routes = [
  {
    path: 'events',
    component: EventComponent,
    children: [
      {
        path: '',
        component: EventIndexComponent
      },
      {
        path: 'new',
        component: EventNewComponent
      },
      {
        path: 'edit/:id',
        component: EventUpdateComponent
      },
      {
      path: ':id',
      component: EventShowComponent
    },

    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(eventRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class EventRoutingModule { }
