import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section-right',
  standalone: true,
  templateUrl: './section-right.component.html',
  styleUrls: ['./section-right.component.scss'],
  imports: [ButtonComponent, NgIf],
})
export class SectionRightComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() buttonProps: {
    text: string;
    variant: string;
    target: string;
    href: string;
  } = {
    text: '',
    variant: 'secondary',
    target: '',
    href: '',
  };
}
