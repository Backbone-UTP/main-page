import { Component, Input } from '@angular/core';

interface SocialLink { icon: string; url: string; alt?: string; }

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  host: { 'class': 'group' }
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
