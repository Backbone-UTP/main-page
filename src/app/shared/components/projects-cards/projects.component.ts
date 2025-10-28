import { Component, Input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardActions],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() status!: 'En Desarrollo' | 'Publicado' | 'Próximamente';
  @Input() link!: string;

  getStatusColor(): string {
    switch (this.status) {
      case 'Publicado':
        return '#00922C'; // Green
      case 'En Desarrollo':
        return '#002EA2'; // Blue
      case 'Próximamente':
        return '#CA9500'; // Yellow
    }
  }
}
