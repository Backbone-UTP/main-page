import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NgIf, ButtonComponent],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent {
  @Input() title = '';
  @Input() subTitle = '';
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
