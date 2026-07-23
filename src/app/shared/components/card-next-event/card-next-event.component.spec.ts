import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNextEventComponent } from './card-next-event.component';
import { BACKBONE_INSTAGRAM_URL } from 'src/assets/content/sfd-links';

describe('CardNextEventComponent', () => {
  let component: CardNextEventComponent;
  let fixture: ComponentFixture<CardNextEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNextEventComponent]
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
});
