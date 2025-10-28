import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpeakerCardComponent} from "../speaker-card/speaker-card.component";
import {speakersSFD2025} from "../../../../../../assets/content/sfd-features";
import { IconComponent } from 'src/app/shared/components/icons/icons.component';

@Component({
  selector: 'app-speakers',
  imports: [CommonModule, SpeakerCardComponent, IconComponent],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent {
  speakers = speakersSFD2025;

  constructor() {}
}
