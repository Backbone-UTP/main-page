import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from '../../../../../shared/components/icons/icons.component';
import { Feature } from 'src/app/shared/interfaces/features.interface';
import { IconsBlockComponent } from '../../../../../shared/components/icons-block/icons-block.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor, NgIf, IconComponent, IconsBlockComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  @Input() features: Feature[] = [];
  @Input() title = '';
  @Input() subtitle = '';
  constructor() {
    // do nothing
  }

  ngOnInit(): void {
    // do nothing
  }
}
