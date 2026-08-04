import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCardComponent } from './member-card.component';

describe('MemberCardComponent', () => {
  let component: MemberCardComponent;
  let fixture: ComponentFixture<MemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberCardComponent);
    component = fixture.componentInstance;
    component.name = 'Paula Castro';
    component.role = 'Project Manager';
    component.photoUrl = 'assets/images/staff_1.webp';
    component.socialLinks = [
      { name: 'linkedin', url: 'https://www.linkedin.com/in/paula-a-castro/' },
      { name: 'github', url: 'https://github.com/paulacastro1' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders secure social profile links over the member image', () => {
    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll<HTMLAnchorElement>('a');

    expect(links.length).toBe(2);
    links.forEach((link) => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toContain('noopener');
      expect(link.rel).toContain('noreferrer');
      expect(link.getAttribute('aria-label')).toContain('Paula Castro');
    });
    expect(element.querySelectorAll('app-icon').length).toBe(2);
  });

  it('lazy-loads the member image', () => {
    const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;

    expect(image.loading).toBe('lazy');
  });
});
