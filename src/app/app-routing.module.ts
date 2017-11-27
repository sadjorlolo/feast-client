import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
// import { EventIndexComponent } from './event/event-index/event-index.component';
// import { EventShowComponent } from './event/event-show/event-show.component';


const routes: Routes = []


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
