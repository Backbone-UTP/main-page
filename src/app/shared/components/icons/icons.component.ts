import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconComponent {
  @Input() iconName: 'sun' | 'moon' | 'system' = 'system';
  @Input() properties: { id: string; class: string } = { id: '', class: '' };

  constructor() {}
}
