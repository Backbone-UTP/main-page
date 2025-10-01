import { Component } from '@angular/core';
import {ProfileCardComponent} from 'src/app/pages/events/sfd-2025/components/profile-card/profile-card.component';
import { staff2025 } from 'src/assets/content/sfd.people';

@Component({
  selector: 'app-team-section',
  imports: [ProfileCardComponent],
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.scss']
})
export class TeamSectionComponent {
  staff = staff2025;
}
