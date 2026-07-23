import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventHeaderComponent } from './event-header.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { mainHeaderLinks } from 'src/assets/content/sfd-links';

@Component({
  standalone: true,
  imports: [EventHeaderComponent],
  template: `
    <app-event-header />
    <section id="projects"></section>
  `,
})
class EventHeaderFragmentHostComponent {}

describe('EventHeaderComponent', () => {
  let component: EventHeaderComponent;
  let fixture: ComponentFixture<EventHeaderComponent>;
  let fragment$: BehaviorSubject<string | null>;
  let intersectionCallback: IntersectionObserverCallback;
  let observe: jasmine.Spy;

  class IntersectionObserverMock {
    readonly root = null;
    readonly rootMargin = '0px';
    readonly thresholds = [0.3];

    constructor(callback: IntersectionObserverCallback) {
      intersectionCallback = callback;
    }

    observe = observe;
    disconnect = jasmine.createSpy('disconnect');
    unobserve = jasmine.createSpy('unobserve');
    takeRecords = (): IntersectionObserverEntry[] => [];
  }

  beforeEach(async () => {
    fragment$ = new BehaviorSubject<string | null>(null);
    observe = jasmine.createSpy('observe');
    window.IntersectionObserver =
      IntersectionObserverMock as unknown as typeof IntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [EventHeaderComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            fragment: fragment$,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders its logo, fragment links, theme styling, and theme toggle', () => {
    component.logoUrl =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    component.logoAlt = 'Custom event';
    component.navItems = mainHeaderLinks;
    component.showThemeToggle = true;
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const logo = element.querySelector('img');
    const eventLink = element.querySelector<HTMLAnchorElement>(
      'a[data-section-id="next-event"]',
    );

    expect(logo?.getAttribute('src')).toBe(component.logoUrl);
    expect(logo?.getAttribute('alt')).toBe('Custom event');
    expect(eventLink?.textContent?.trim()).toBe('Eventos');
    expect(eventLink?.getAttribute('href')).toBe('/#next-event');
    expect(element.querySelector('nav')?.classList).toContain('bg-white/70');
    expect(element.querySelector('app-theme-toggle')).not.toBeNull();
  });

  it('renders the Backbone icon with dark-only styling when configured', () => {
    component.useIcon = true;
    component.iconName = 'backbone-logo';
    component.themeMode = 'dark-only';
    component.showThemeToggle = false;
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#header-logo')).not.toBeNull();
    expect(element.querySelector('img')).toBeNull();
    expect(element.querySelector('nav')?.classList).toContain('bg-[#271B1B]');
    expect(element.querySelector('app-theme-toggle')).toBeNull();
  });

  it('scrolls the requested section into view when the route fragment changes', () => {
    const section = document.createElement('section');
    section.id = 'projects';
    section.scrollIntoView = jasmine.createSpy('scrollIntoView');
    document.body.appendChild(section);

    fragment$.next('projects');
    fixture.detectChanges();

    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    section.remove();
  });

  it('waits until rendering finishes before scrolling an initial fragment', () => {
    fixture.destroy();
    fragment$.next('projects');
    const scrollIntoView = spyOn(
      HTMLElement.prototype,
      'scrollIntoView',
    );
    const hostFixture = TestBed.createComponent(
      EventHeaderFragmentHostComponent,
    );

    hostFixture.detectChanges();

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    hostFixture.destroy();
  });

  it('tracks the active main-page section in the rendered navigation', () => {
    component.navItems = mainHeaderLinks;
    const section = document.createElement('section');
    section.id = 'projects';
    document.body.appendChild(section);
    fixture.detectChanges();
    component.onVisibilityChange();

    intersectionCallback(
      [
        {
          isIntersecting: true,
          target: section,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );

    const activeLink = fixture.nativeElement.querySelector(
      'a[data-section-id="projects"]',
    ) as HTMLAnchorElement;
    const inactiveLink = fixture.nativeElement.querySelector(
      'a[data-section-id="members"]',
    ) as HTMLAnchorElement;

    expect(observe).toHaveBeenCalledWith(section);
    expect(activeLink.classList).toContain('text-primary');
    expect(inactiveLink.classList).not.toContain('text-primary');
    section.remove();
  });
});
