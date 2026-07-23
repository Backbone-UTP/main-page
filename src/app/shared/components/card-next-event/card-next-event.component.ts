import { Component, input } from '@angular/core';
import { Event } from '../../interfaces/data.models';
import { DatePipe } from '@angular/common';
import { BACKBONE_INSTAGRAM_URL } from 'src/assets/content/sfd-links';

@Component({
  selector: 'app-card-next-event',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './card-next-event.component.html',
  styleUrl: './card-next-event.component.scss'
})
export class CardNextEventComponent {
  event = input.required<Event | null>();
  readonly instagramUrl = BACKBONE_INSTAGRAM_URL;

  countdownTime = '01 : 12 : 25 : 50'; // Logic for countdown can be added later or computed
  countdownLabels = 'Días : Hrs : Mins : Secs';

  onRegisterClick(): void {
    // Aquí se puede implementar la lógica de registro
    console.log('Registro al evento', this.event()?.title);
  }
}
