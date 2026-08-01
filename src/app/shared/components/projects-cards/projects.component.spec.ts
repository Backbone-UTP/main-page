import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { PROJECTS } from 'src/assets/content/projects';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
  });

  it('renders every repository and hides the live action when unavailable', () => {
    fixture.componentRef.setInput('project', PROJECTS[0]);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const links = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('a'),
    );

    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'Frontend',
      'Backend',
    ]);
    expect(links.every((link) => link.rel.includes('noopener'))).toBeTrue();
    expect(fixture.nativeElement.textContent).not.toContain('Ver proyecto');
  });

  it('renders repository and live actions independently', () => {
    const project = PROJECTS[1];
    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const links = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('a'),
    );

    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'Repositorio',
      'Ver proyecto',
    ]);
    if (!project.liveUrl) {
      fail('Backbone Page should provide a live URL');
      return;
    }
    expect(links[1].getAttribute('href')).toBe(project.liveUrl);
  });
});
