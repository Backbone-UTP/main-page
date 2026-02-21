import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from 'src/app/shared/components/projects-cards/projects.component';
import { HeroComponent } from 'src/app/shared/components/hero/hero.component';
import { CardNextEventComponent } from 'src/app/shared/components/card-next-event/card-next-event.component';
import { PreviousEventCardComponent } from 'src/app/shared/components/previous-event-card/previous-event-card.component';
import { MemberCardComponent } from 'src/app/components/member-card/member-card.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { DataService } from 'src/app/shared/services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsComponent,
    HeroComponent,
    CardNextEventComponent,
    PreviousEventCardComponent,
    MemberCardComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private dataService = inject(DataService);

  nextEvent = toSignal(this.dataService.getNextEvent());
  pastEvents = toSignal(this.dataService.getPastEvents());
  projects = toSignal(this.dataService.getProjects());
  members = toSignal(this.dataService.getMembers());
}
