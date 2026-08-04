import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
  });

  it('should expose only the supported Code of Conduct page', () => {
    const element: HTMLElement = fixture.nativeElement;
    const internalLinks = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('a'),
    ).filter((link) => link.getAttribute('href')?.startsWith('/'));

    expect(internalLinks.length).toBe(1);
    expect(internalLinks[0].getAttribute('href')).toBe('/code-of-conduct');
    expect(element.textContent).not.toContain('Contacto');
    expect(element.textContent).not.toContain('Política de Privacidad');
  });
});
