import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/errors.component';

import {
  EventsListResolverService,
  EventRouteActivator,
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,

} from './events/index';


const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', component: EventsListComponent },
  { path: '**', component: EventsListComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

}
