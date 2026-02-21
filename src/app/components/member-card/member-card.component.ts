import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  icon: string;
  url: string;
  alt?: string;
}

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent {
  @Input() name = '';
  @Input() role = '';
  @Input() photoUrl = '';
  @Input() socialLinks: SocialLink[] = [];

  onIconClick(url: string) {
    window.open(url, '_blank');
  }
}
