import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SFD2024Component } from './sfd-2024.component';

describe('SFD2024Component', () => {
  let component: SFD2024Component;
  let fixture: ComponentFixture<SFD2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFD2024Component],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SFD2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the shared event header with SFD 2024 navigation', () => {
    const header = fixture.nativeElement.querySelector(
      'app-event-header',
    ) as HTMLElement;
    const aboutLink = header.querySelector<HTMLAnchorElement>(
      'a[data-section-id="about"]',
    );

    expect(header.querySelector('img')?.getAttribute('alt')).toBe('SFD 2024');
    expect(aboutLink?.getAttribute('href')).toBe(
      '/events/software-freedom-day-2024#about',
    );
    expect(header.querySelector('app-theme-toggle')).not.toBeNull();
  });
});
