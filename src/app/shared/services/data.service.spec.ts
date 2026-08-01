import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import {
  DataService,
  isUpcomingEvent,
  sortEventsByDate,
} from './data.service';
import { EVENTS } from 'src/assets/content/events';

describe('DataService event date logic', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('sorts events oldest-first without mutating the source catalog', () => {
    const sorted = sortEventsByDate(EVENTS);

    expect(sorted.map((event) => event.title)).toEqual([
      'FLiSoL 2023',
      'Software Freedom Day 2023',
      'FLiSoL 2024',
      'Software Freedom Day 2024',
      'FLiSoL 2025',
      'Software Freedom Day 2025',
    ]);
    expect(EVENTS[0].title).toBe('Software Freedom Day 2025');
  });

  it('treats an event at the current instant as past', () => {
    const event = {
      ...EVENTS[0],
      date: '2026-08-01T12:00:00Z',
    };
    const now = new Date('2026-08-01T12:00:00Z');

    expect(isUpcomingEvent(event, now)).toBeFalse();
    expect(isUpcomingEvent(event, new Date('2026-08-01T11:59:59Z'))).toBeTrue();
  });

  it('returns the current catalog in the expected service states', async () => {
    const events = await firstValueFrom(service.getEvents());
    const pastEvents = await firstValueFrom(service.getPastEvents());
    const nextEvent = await firstValueFrom(service.getNextEvent());

    expect(events.length).toBe(EVENTS.length);
    expect(pastEvents.map((event) => event.title)).toEqual([
      'Software Freedom Day 2025',
      'FLiSoL 2025',
      'Software Freedom Day 2024',
      'FLiSoL 2024',
      'Software Freedom Day 2023',
      'FLiSoL 2023',
    ]);
    expect(nextEvent).toBeNull();
  });
});
