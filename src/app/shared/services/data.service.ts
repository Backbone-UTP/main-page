import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event, Member, Project } from '../interfaces/data.models';
import { EVENTS } from '../../../assets/content/events';
import { MEMBERS } from '../../../assets/content/members';
import { PROJECTS } from '../../../assets/content/projects';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private events: Event[] = EVENTS;

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }

  getEvents(): Observable<Event[]> {
    // Sort events by date
    const sortedEvents = [...this.events].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    return of(sortedEvents);
  }

  getNextEvent(): Observable<Event | null> {
    const now = new Date();
    const sortedEvents = [...this.events].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    const nextEvent = sortedEvents.find((event) => new Date(event.date) > now);
    return of(nextEvent || null);
  }

  getPastEvents(): Observable<Event[]> {
    const now = new Date();
    const sortedEvents = [...this.events].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    ); // Descending for past
    const pastEvents = sortedEvents.filter(
      (event) => new Date(event.date) <= now,
    );
    return of(pastEvents);
  }
}
