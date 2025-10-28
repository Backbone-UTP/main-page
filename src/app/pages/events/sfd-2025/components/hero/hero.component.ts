import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../../../../../shared/components/icons/icons.component';
import { CountdownComponent } from '../../../../../shared/components/countdown/countdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sfd-hero',
  standalone: true,
  imports: [ButtonComponent, IconComponent, CountdownComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class SFD2025HeroComponent {

  isEventStarted = false;

  onCountdownExpired(isExpired: boolean): void {
    this.isEventStarted = isExpired;
  }

  get liveStreamUrl() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour < 12) {
      return 'https://youtube.com/live/Pt__8xo4hn8'
    } else {
      return 'https://youtube.com/live/Wah6CUzzIz8'
    }
  }

  constructor(private sanitizer: DomSanitizer) {}
}
