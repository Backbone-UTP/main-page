import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {IconComponent} from 'src/app/shared/components/icons/icons.component';
import { LinkItem } from 'src/app/shared/interfaces/link-item.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-speaker-card',
  imports: [CommonModule, IconComponent, RouterLink],
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent {
  @Input() name: string = 'Unknown Speaker';
  @Input() role: string = 'Unknown Role';
  @Input() image: string = 'assets/default-speaker.png';
  @Input() description: string = 'No description available.';
  @Input() index: number = 0;
  @Input() links: LinkItem[] = [];
  constructor() { }
}
  