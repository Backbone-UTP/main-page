import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersSectionComponent } from './members-section.component';
import { MEMBERS } from 'src/assets/content/members';

describe('MembersSectionComponent', () => {
  let fixture: ComponentFixture<MembersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MembersSectionComponent);
    fixture.componentRef.setInput('members', MEMBERS.slice(0, 2));
    fixture.componentRef.setInput('title', 'Equipo del proyecto');
    fixture.componentRef.setInput('columns', 2);
    fixture.detectChanges();
  });

  it('renders a configurable title, member count, and column count', () => {
    const element: HTMLElement = fixture.nativeElement;
    const grid = element.querySelector<HTMLElement>('.member-grid');

    expect(element.querySelector('h2')?.textContent).toContain(
      'Equipo del proyecto',
    );
    expect(element.querySelectorAll('app-member-card').length).toBe(2);
    expect(grid?.style.getPropertyValue('--member-columns')).toBe('2');
  });
});
