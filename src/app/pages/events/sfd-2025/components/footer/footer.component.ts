import { Component, Input } from '@angular/core';
import { FooterLinkComponent } from '../footer-link/footer-link.component';
import { IconComponent } from '../../../../../shared/components/icons/icons.component';
import { Footer } from 'src/app/shared/interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLinkComponent, IconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() socialLinks: Footer[] = [];
}
