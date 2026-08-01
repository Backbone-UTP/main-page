import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from 'src/app/shared/components/projects-cards/projects.component';
import { HeroComponent } from 'src/app/shared/components/hero/hero.component';
import { CardNextEventComponent } from 'src/app/shared/components/card-next-event/card-next-event.component';
import { PreviousEventCardComponent } from 'src/app/shared/components/previous-event-card/previous-event-card.component';
import { MembersSectionComponent } from 'src/app/shared/components/members-section/members-section.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { DataService } from 'src/app/shared/services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventHeaderComponent } from 'src/app/shared/components/event-header/event-header.component';
import { mainHeaderLinks } from 'src/assets/content/sfd-links';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsComponent,
    HeroComponent,
    CardNextEventComponent,
    PreviousEventCardComponent,
    MembersSectionComponent,
    FooterComponent,
    EventHeaderComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  private dataService = inject(DataService);
  @ViewChild('pastEventsSlider')
  private pastEventsSlider?: ElementRef<HTMLDivElement>;
  @ViewChild('projectsSlider')
  private projectsSlider?: ElementRef<HTMLDivElement>;

  canScrollPrev = false;
  canScrollNext = false;
  canScrollProjectsPrev = false;
  canScrollProjectsNext = false;

  headerLinks = mainHeaderLinks;
  nextEvent = toSignal(this.dataService.getNextEvent());
  pastEvents = toSignal(this.dataService.getPastEvents());
  projects = toSignal(this.dataService.getProjects());
  members = toSignal(this.dataService.getMembers());

  constructor() {
    effect(() => {
      this.pastEvents();
      this.projects();
      setTimeout(() => {
        this.updatePastEventsNavigation();
        this.updateProjectsNavigation();
      });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updatePastEventsNavigation();
      this.updateProjectsNavigation();
    });
  }

  scrollPastEvents(direction: 'prev' | 'next'): void {
    const slider = this.pastEventsSlider?.nativeElement;
    if (!slider) {
      return;
    }

    const scrollAmount = Math.max(slider.clientWidth * 0.8, 280);
    slider.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });

    setTimeout(() => this.updatePastEventsNavigation(), 350);
  }

  onPastEventsScroll(): void {
    this.updatePastEventsNavigation();
  }

  scrollProjects(direction: 'prev' | 'next'): void {
    const slider = this.projectsSlider?.nativeElement;
    if (!slider) {
      return;
    }

    const scrollAmount = Math.max(slider.clientWidth * 0.8, 313);
    slider.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });

    setTimeout(() => this.updateProjectsNavigation(), 350);
  }

  onProjectsScroll(): void {
    this.updateProjectsNavigation();
  }

  private updatePastEventsNavigation(): void {
    const slider = this.pastEventsSlider?.nativeElement;
    if (!slider) {
      this.canScrollPrev = false;
      this.canScrollNext = false;
      return;
    }

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const threshold = 2;

    this.canScrollPrev = slider.scrollLeft > threshold;
    this.canScrollNext = slider.scrollLeft < maxScrollLeft - threshold;
  }

  private updateProjectsNavigation(): void {
    const slider = this.projectsSlider?.nativeElement;
    if (!slider) {
      this.canScrollProjectsPrev = false;
      this.canScrollProjectsNext = false;
      return;
    }

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const threshold = 2;

    this.canScrollProjectsPrev = slider.scrollLeft > threshold;
    this.canScrollProjectsNext = slider.scrollLeft < maxScrollLeft - threshold;
  }
}
