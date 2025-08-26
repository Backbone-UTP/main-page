import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../../../../../shared/components/icons/icons.component';

@Component({
  selector: 'app-sfd-hero',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class SFD2025HeroComponent {
  constructor(private sanitizer: DomSanitizer) {}
}
