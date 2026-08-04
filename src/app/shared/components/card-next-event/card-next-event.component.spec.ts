import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CardNextEventComponent } from './card-next-event.component';
import { BACKBONE_INSTAGRAM_URL } from 'src/assets/content/sfd-links';
import { Event } from '../../interfaces/data.models';

describe('CardNextEventComponent', () => {
  let component: CardNextEventComponent;
  let fixture: ComponentFixture<CardNextEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNextEventComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardNextEventComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('event', null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invite users to visit the official Instagram when there is no next event', () => {
    const element: HTMLElement = fixture.nativeElement;
    const link = element.querySelector<HTMLAnchorElement>('a');

    expect(element.textContent).toContain('Estamos preparando el próximo evento');
    expect(element.textContent).toContain('Ver Instagram');
    expect(link?.href).toBe(BACKBONE_INSTAGRAM_URL);
    expect(link?.target).toBe('_blank');
    expect(link?.rel).toContain('noopener');
    expect(link?.rel).toContain('noreferrer');
    expect(link?.getAttribute('aria-label')).toContain('abre en una nueva pestaña');
  });

  it('should show a real countdown and registration link for an upcoming event', () => {
    const event = createEvent({
      date: '2099-10-10T08:00:00-05:00',
      registrationUrl: 'https://example.com/register',
    });

    fixture.componentRef.setInput('event', event);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const link = element.querySelector<HTMLAnchorElement>('a');

    expect(element.querySelector('app-countdown')).toBeTruthy();
    expect(link?.textContent).toContain('Regístrate');
    expect(link?.href).toBe(event.registrationUrl);
    expect(link?.target).toBe('_blank');
    expect(link?.rel).toContain('noopener');
  });

  it('should hide the registration CTA when an upcoming event has no registration URL', () => {
    fixture.componentRef.setInput(
      'event',
      createEvent({ date: '2099-10-10T08:00:00-05:00' }),
    );
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('app-countdown')).toBeTruthy();
    expect(element.textContent).not.toContain('Regístrate');
  });

  it('should use a responsive stacked layout for populated cards', () => {
    fixture.componentRef.setInput(
      'event',
      createEvent({ date: '2099-10-10T08:00:00-05:00' }),
    );
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const layout = element.querySelector<HTMLElement>('.event-card-layout');
    const image = element.querySelector<HTMLElement>('.event-card-image');
    const content = element.querySelector<HTMLElement>('.event-card-content');
    const actions = element.querySelector<HTMLElement>('.event-card-actions');

    expect(layout?.classList).toContain('flex-col');
    expect(layout?.classList).toContain('md:flex-row');
    expect(image?.classList).toContain('w-full');
    expect(image?.classList).toContain('md:w-[464px]');
    expect(content?.classList).toContain('w-full');
    expect(content?.classList).toContain('min-w-0');
    expect(actions?.classList).toContain('flex-col');
    expect(actions?.classList).toContain('sm:flex-row');
  });

  it('includes the event year in the compact date tag', () => {
    fixture.componentRef.setInput('event', createEvent());
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toMatch(/\/99 - /);
  });

  it('lazy-loads the event image', () => {
    fixture.componentRef.setInput('event', createEvent());
    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;

    expect(image.loading).toBe('lazy');
  });

  it('should link to more details when a past event has an internal page', () => {
    fixture.componentRef.setInput(
      'event',
      createEvent({
        date: '2000-10-10T08:00:00-05:00',
        relativeUrl: '/events/example',
      }),
    );
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const link = element.querySelector<HTMLAnchorElement>('a');

    expect(element.querySelector('app-countdown')).toBeNull();
    expect(link?.textContent).toContain('Ver más detalles');
    expect(link?.getAttribute('href')).toBe('/events/example');
  });
});

function createEvent(overrides: Partial<Event> = {}): Event {
  return {
    title: 'Example event',
    description: 'Example description',
    location: 'UTP',
    date: '2099-10-10T08:00:00-05:00',
    image: 'assets/images/main/sfd-2025.webp',
    ...overrides,
  };
}
