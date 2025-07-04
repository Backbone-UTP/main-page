import { Component, Input } from '@angular/core';
import { IconComponent } from '../icons/icons.component';
import { NgFor } from '@angular/common';
import { LinkItem } from 'src/app/shared/interfaces/link-item.interface';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [IconComponent, NgFor],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() image: string = '';
  @Input() links: LinkItem[] = [];
  
}
