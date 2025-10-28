import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-link',
  standalone: true,

  templateUrl: './footer-link.component.html',
  styleUrls: ['./footer-link.component.scss'],
})
export class FooterLinkComponent {
  @Input() url = '';
}
