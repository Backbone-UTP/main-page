import { Component, input } from '@angular/core';
import { Project } from '../../interfaces/data.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  project = input.required<Project>();

  getStatusColor(): string {
    switch (this.project().status) {
      case 'Publicado':
        return '#00922C'; // Green
      case 'En Desarrollo':
        return '#002EA2'; // Blue
      case 'Próximamente':
        return '#CA9500'; // Yellow
    }
  }
}
