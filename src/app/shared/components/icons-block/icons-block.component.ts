import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-block',
  standalone: true,
  templateUrl: './icons-block.component.html',
  styleUrls: ['./icons-block.component.scss'],
})
export class IconsBlockComponent {
  @Input() heading = '';
  @Input() content = '';
  constructor() {
    // Initialization code goes here
  }
}
