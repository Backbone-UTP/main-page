import { Component, Input } from '@angular/core';
import { IconComponent } from 'src/app/shared/components/icons/icons.component';

import { LinkItem } from 'src/app/shared/interfaces/link-item.interface';

@Component({
    selector: 'app-profile-card',
    imports: [IconComponent],
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() name = '';
  @Input() role = '';
  @Input() image = '';
  @Input() links: LinkItem[] = [];
  
}
