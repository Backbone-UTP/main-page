import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'presentation-growing-circles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './growing-circles.component.html',
})
export class GrowingCirclesComponent {
  @Input()
  public nCircles: number[] = [];
}
