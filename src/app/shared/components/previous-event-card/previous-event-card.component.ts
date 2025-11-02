import { Component } from '@angular/core';
import { EVENTS } from 'src/assets/content/events';

@Component({
  selector: 'app-previous-event-card',
  standalone: true,
  imports: [],
  templateUrl: './previous-event-card.component.html',
})
export class PreviousEventCardComponent {
  events = EVENTS[0];

  constructor() {
  }
}
