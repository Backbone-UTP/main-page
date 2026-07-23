import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Event } from '../../interfaces/data.models';
import { DatePipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-previous-event-card',
  standalone: true,
  imports: [DatePipe, NgTemplateOutlet, RouterLink],
  templateUrl: './previous-event-card.component.html',
})
export class PreviousEventCardComponent {
  event = input.required<Event>();
}
