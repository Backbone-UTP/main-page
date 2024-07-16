import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/shared/interfaces/icons.interface';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconComponent {
  @Input() iconName: Icon = 'system';
  @Input() properties: { id: string; class: string } = { id: '', class: '' };

  constructor() {}
}
