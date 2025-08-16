import { Component, Input } from '@angular/core';
import { Logo } from '../../interfaces/logo.interface';

@Component({
  selector: 'app-logos-list',
  imports: [],
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss'],
})
export class LogosListComponent {
  @Input() logos: Logo[] = [];
  @Input() title = '';
  @Input() subtitle = '';
  constructor() {
    // Constructor logic if needed
  }
}
