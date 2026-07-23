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
});
