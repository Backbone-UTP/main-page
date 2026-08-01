import { Component, input } from '@angular/core';
import { MemberCardComponent } from 'src/app/components/member-card/member-card.component';
import { Member } from 'src/app/shared/interfaces/data.models';

@Component({
  selector: 'app-members-section',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './members-section.component.html',
  styleUrl: './members-section.component.scss',
})
export class MembersSectionComponent {
  title = input('Miembros');
  members = input.required<Member[]>();
  columns = input(6);
}
