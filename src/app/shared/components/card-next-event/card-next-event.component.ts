import { Component, input } from '@angular/core';
import { Event } from '../../interfaces/data.models';
import { DatePipe } from '@angular/common';
import { BACKBONE_INSTAGRAM_URL } from 'src/assets/content/sfd-links';
import { CountdownComponent } from '../countdown/countdown.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-next-event',
  standalone: true,
  imports: [CountdownComponent, DatePipe, RouterLink],
  templateUrl: './card-next-event.component.html',
  styleUrl: './card-next-event.component.scss',
})
export class CardNextEventComponent {
  event = input.required<Event | null>();
  readonly instagramUrl = BACKBONE_INSTAGRAM_URL;

  isUpcoming(): boolean {
    const event = this.event();
    return event ? new Date(event.date).getTime() > Date.now() : false;
  }
}
