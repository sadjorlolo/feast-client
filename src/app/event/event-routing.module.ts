import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event.component';
import { EventIndexComponent } from './event-index/event-index.component';


const eventRoutes: Routes = [
  {
    path: 'index',
    component: EventIndexComponent,
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
