import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'growing-circles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './growing-circles.component.html',
})
export class GrowingCirclesComponent {
  @Input()
  public circles: number[] = [];

  @Input()
  public circlesColor: string = '';
}
