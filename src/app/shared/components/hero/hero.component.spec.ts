import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { BACKBONE_WHATSAPP_COMMUNITY_URL } from 'src/assets/content/sfd-links';

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
  });

  it('should link the community CTA to WhatsApp', () => {
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(link.textContent).toContain('Únete a la comunidad');
    expect(link.href).toBe(BACKBONE_WHATSAPP_COMMUNITY_URL);
    expect(link.target).toBe('_blank');
    expect(link.rel).toContain('noopener');
    expect(link.getAttribute('aria-label')).toContain('WhatsApp');
  });
});
