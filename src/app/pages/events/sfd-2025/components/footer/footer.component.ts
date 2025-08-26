import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterLinkComponent } from '../footer-link/footer-link.component';
import { IconComponent } from '../../../../../shared/components/icons/icons.component';
import { Icon } from 'src/app/shared/interfaces/icons.interface';
import { Footer } from 'src/app/shared/interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, FooterLinkComponent, IconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() socialLinks: Footer[] = [];
}
