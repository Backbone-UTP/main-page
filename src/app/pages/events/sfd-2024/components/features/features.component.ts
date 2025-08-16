import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../../../shared/components/icons/icons.component';
import { Feature } from 'src/app/shared/interfaces/features.interface';
import { IconsBlockComponent } from '../../../../../shared/components/icons-block/icons-block.component';

@Component({
  selector: 'app-features',
  imports: [IconComponent, IconsBlockComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  @Input() features: Feature[] = [];
  @Input() title = '';
  @Input() subtitle = '';
  constructor() {
    // Constructor logic can go here if needed
  }
}
