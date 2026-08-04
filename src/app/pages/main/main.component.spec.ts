import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let intersectionCallback: IntersectionObserverCallback;

  class IntersectionObserverMock {
    constructor(callback: IntersectionObserverCallback) {
      intersectionCallback = callback;
    }

    observe = jasmine.createSpy('observe');
    disconnect = jasmine.createSpy('disconnect');
  }

  beforeEach(async () => {
    window.IntersectionObserver =
      IntersectionObserverMock as unknown as typeof IntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [MainComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders section navigation and tracks the active section', () => {
    const element = fixture.nativeElement as HTMLElement;
    const projectsSection = element.querySelector('#projects') as HTMLElement;
    const projectsLink = element.querySelector<HTMLAnchorElement>(
      'app-event-header a[data-section-id="projects"]',
    );

    intersectionCallback(
      [
        {
          isIntersecting: true,
          target: projectsSection,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );

    expect(projectsLink?.getAttribute('href')).toBe('/#projects');
    expect(projectsLink?.classList).toContain('text-primary');
    expect(element.querySelector('#next-event')).not.toBeNull();
    expect(element.querySelector('#members')).not.toBeNull();
  });

  it('shows project navigation only when the gallery overflows', () => {
    const element = fixture.nativeElement as HTMLElement;
    const slider = element.querySelector<HTMLElement>('.projects-slider')!;

    expect(
      element.querySelector('[aria-label="Ver siguientes proyectos"]'),
    ).toBeNull();

    Object.defineProperties(slider, {
      clientWidth: { configurable: true, value: 600 },
      scrollWidth: { configurable: true, value: 1000 },
      scrollLeft: { configurable: true, value: 0, writable: true },
    });
    slider.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    const nextButton = element.querySelector<HTMLButtonElement>(
      '[aria-label="Ver siguientes proyectos"]',
    );
    expect(nextButton).not.toBeNull();
    expect(
      element.querySelector('[aria-label="Ver proyectos anteriores"]'),
    ).toBeNull();

    const scrollBySpy = jasmine.createSpy('scrollBy');
    Object.defineProperty(slider, 'scrollBy', {
      configurable: true,
      value: scrollBySpy,
    });
    nextButton?.click();

    expect(scrollBySpy).toHaveBeenCalledWith({
      left: 480,
      behavior: 'smooth',
    });
  });

  it('recalculates both galleries when the viewport changes', () => {
    const element = fixture.nativeElement as HTMLElement;
    const projectSlider = element.querySelector<HTMLElement>('.projects-slider')!;
    const pastEventsSlider = element.querySelector<HTMLElement>(
      '.past-events-slider',
    )!;

    Object.defineProperties(projectSlider, {
      clientWidth: { configurable: true, value: 600 },
      scrollWidth: { configurable: true, value: 1000 },
      scrollLeft: { configurable: true, value: 0, writable: true },
    });
    Object.defineProperties(pastEventsSlider, {
      clientWidth: { configurable: true, value: 600 },
      scrollWidth: { configurable: true, value: 1000 },
      scrollLeft: { configurable: true, value: 10, writable: true },
    });

    component.onWindowResize();

    expect(component.canScrollProjectsNext).toBeTrue();
    expect(component.canScrollPrev).toBeTrue();
  });
});
