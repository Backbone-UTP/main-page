import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../../../../../shared/components/icons/icons.component';

@Component({
  selector: 'app-sfd-hero',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class SFD2024HeroComponent {
  @Input() banner: any;

  constructor(private sanitizer: DomSanitizer) {}

  markdownify(text: string): SafeHtml {
    // For now, we'll just return the text as-is
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
