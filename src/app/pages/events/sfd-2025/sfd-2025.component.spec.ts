import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SFD2025Component } from './sfd-2025.component';

describe('SFD2025Component', () => {
  let component: SFD2025Component;
  let fixture: ComponentFixture<SFD2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFD2025Component],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SFD2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the shared event header with SFD 2025 navigation', () => {
    const header = fixture.nativeElement.querySelector(
      'app-event-header',
    ) as HTMLElement;
    const agendaLink = header.querySelector<HTMLAnchorElement>(
      'a[data-section-id="agenda"]',
    );

    expect(header.querySelector('img')?.getAttribute('alt')).toBe('SFD 2025');
    expect(agendaLink?.getAttribute('href')).toBe(
      '/events/software-freedom-day-2025#agenda',
    );
    expect(header.querySelector('app-theme-toggle')).toBeNull();
  });
});
