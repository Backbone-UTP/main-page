import { NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/shared/interfaces/icons.interface';
import { IconProperties } from 'src/app/shared/interfaces/icon-properties.interface';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgClass],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconComponent {
  @Input() iconName: Icon = 'system';
  @Input() properties: IconProperties = { id: '', class: '' };

  constructor() {}
}
