import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.scss'
})
export class ProjectDescriptionComponent {
  @Input() project!: Project;
}
