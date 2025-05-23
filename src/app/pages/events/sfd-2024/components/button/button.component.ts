import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Variants {
  primary: string;
  secondary: string;
  tertiary: string;
  link: string;
  [key: string]: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant = 'secondary';
  @Input() className = '';
  @Input() target = '';
  @Input() text = '';
  @Input() href = '';

  variants: Variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn btn-tertiary',
    link: 'cursor-pointer hover:text-primary',
  };

  // Example twMerge function, replace with actual logic or utility
  twMerge(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }
}
