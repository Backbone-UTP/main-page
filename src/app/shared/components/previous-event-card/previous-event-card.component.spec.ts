import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PreviousEventCardComponent } from './previous-event-card.component';
import { EVENTS } from 'src/assets/content/events';

describe('PreviousEventCardComponent', () => {
  let fixture: ComponentFixture<PreviousEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousEventCardComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousEventCardComponent);
  });

  [2024, 2025].forEach((year) => {
    it(`renders the SFD ${year} catalog deep link`, () => {
      const event = EVENTS.find(
        (candidate) => candidate.title === `Software Freedom Day ${year}`,
      );

      expect(event).withContext(`Missing SFD ${year} catalog entry`).toBeDefined();
      fixture.componentRef.setInput('event', event);
      fixture.detectChanges();

      const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

      expect(link.getAttribute('href')).toBe(
        `/events/software-freedom-day-${year}`,
      );
      expect(link.getAttribute('target')).toBeNull();
      expect(link.getAttribute('rel')).toBeNull();
    });
  });

  it('opens the SFD 2023 external recording safely in a new tab', () => {
    const event = EVENTS.find(
      (candidate) => candidate.title === 'Software Freedom Day 2023',
    );

    expect(event).withContext('Missing SFD 2023 catalog entry').toBeDefined();
    fixture.componentRef.setInput('event', event);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(link.getAttribute('href')).toBe(
      'https://www.youtube.com/live/b3xiS602YKY',
    );
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('includes the event year in the compact date tag', () => {
    fixture.componentRef.setInput('event', EVENTS[0]);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toMatch(/\/25 - /);
  });

  it('lazy-loads the event image', () => {
    fixture.componentRef.setInput('event', EVENTS[0]);
    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;

    expect(image.loading).toBe('lazy');
  });
});
