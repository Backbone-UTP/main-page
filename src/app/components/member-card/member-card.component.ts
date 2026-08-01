import { Component, Input } from '@angular/core';
import { IconComponent } from 'src/app/shared/components/icons/icons.component';
import { LinkItem } from 'src/app/shared/interfaces/link-item.interface';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent {
  @Input() name = '';
  @Input() role = '';
  @Input() photoUrl = '';
  @Input() socialLinks: LinkItem[] = [];
}
