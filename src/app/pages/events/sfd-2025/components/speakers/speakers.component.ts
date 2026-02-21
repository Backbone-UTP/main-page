import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpeakerCardComponent} from "../speaker-card/speaker-card.component";
import {speakersSFD2025} from "../../../../../../assets/content/sfd-features";
@Component({
  selector: 'app-speakers',
  imports: [CommonModule, SpeakerCardComponent],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent {
  speakers = speakersSFD2025;
}
