import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrService } from './common/toastr.service';
import { AppRoutingModule } from './/app-routing.module';
import { Error404Component } from './errors/errors.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolverService

} from './events/index';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolverService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you have not saved, wnat to cancel?');
  }
  return true;
}
