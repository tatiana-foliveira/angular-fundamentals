import { Component, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return 'text-red bold';
    } else {
      return '';
    }
  }
}
