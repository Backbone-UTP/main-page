import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CodeOfConductComponent } from './code-of-conduct.component';

describe('CodeOfConductComponent', () => {
  let component: CodeOfConductComponent;
  let fixture: ComponentFixture<CodeOfConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeOfConductComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page content and keep the footer reachable', () => {
    const element: HTMLElement = fixture.nativeElement;
    const heading = element.querySelector('h1');
    const contactHeading = Array.from(element.querySelectorAll('h2')).find(
      (headingElement) => headingElement.textContent?.includes('Contacto'),
    );
    const contactLinks = element.querySelectorAll<HTMLAnchorElement>(
      'a[href^="mailto:"]',
    );

    expect(heading?.textContent).toContain('Código de Conducta de Backbone UTP');
    expect(contactHeading).toBeTruthy();
    expect(contactLinks.length).toBe(3);
    expect(element.querySelector('app-footer')).toBeTruthy();
  });
});
