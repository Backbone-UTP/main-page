// timeline.component.ts
import { Component, inject, Input } from '@angular/core';
import { TimelineEvent } from 'src/app/shared/interfaces/features.interface';
import { MatDialog } from '@angular/material/dialog';
import { CardPresentationComponent } from 'src/app/pages/events/sfd-2024/components/card-presentation/card-presentation.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  @Input() timelineItems: TimelineEvent[] = [];

  // constructor(private readonly dialog: MatDialog) {}

  readonly dialog = inject(MatDialog);

  openModal(item: TimelineEvent) {
    if (item.talk == '') return;
    this.dialog.open(CardPresentationComponent, {
      data: item,
      panelClass: 'm-10',
      maxWidth: '800px',
      maxHeight: '700px',
    });
  }
}
