import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event, Member, Project } from '../interfaces/data.models';
import { EVENTS } from '../../../assets/content/events';
import { MEMBERS } from '../../../assets/content/members';
import { PROJECTS } from '../../../assets/content/projects';

export function sortEventsByDate(
  events: readonly Event[],
  descending = false,
): Event[] {
  const direction = descending ? -1 : 1;

  return [...events].sort(
    (a, b) =>
      direction * (new Date(a.date).getTime() - new Date(b.date).getTime()),
  );
}

export function isUpcomingEvent(event: Event, now: Date): boolean {
  return new Date(event.date).getTime() > now.getTime();
}

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
    return of(sortEventsByDate(this.events));
  }

  getNextEvent(): Observable<Event | null> {
    const now = new Date();
    const nextEvent = sortEventsByDate(this.events).find((event) =>
      isUpcomingEvent(event, now),
    );
    return of(nextEvent || null);
  }

  getPastEvents(): Observable<Event[]> {
    const now = new Date();
    return of(
      sortEventsByDate(this.events, true).filter(
        (event) => !isUpcomingEvent(event, now),
      ),
    );
  }
}
