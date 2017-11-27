import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event.component';
import { EventIndexComponent } from './event-index/event-index.component';
import { EventShowComponent } from './event-show/event-show.component';


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
      path: ':id',
      component: EventShowComponent
    }
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
