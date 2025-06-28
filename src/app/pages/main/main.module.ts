import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProjectsComponent } from 'src/app/shared/components/projects-cards/projects.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ProjectsComponent],
})
export class MainModule {}
