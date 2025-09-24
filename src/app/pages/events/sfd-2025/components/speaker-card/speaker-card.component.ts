import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speaker-card',
  imports: [CommonModule],
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent {
  @Input() name: string = 'Unknown Speaker';
  @Input() role: string = 'Unknown Role';
  @Input() image: string = 'assets/default-speaker.png';
  @Input() description: string = 'No description available.';
  @Input() index: number = 0;
  constructor() { }
}
  