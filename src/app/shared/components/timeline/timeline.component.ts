// timeline.component.ts
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { TimelineEvent } from 'src/app/shared/interfaces/features.interface';
import {MatDialog} from '@angular/material/dialog';
import { CardPresentationComponent } from 'src/app/pages/events/sfd-2024/components/card-presentation/card-presentation.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() timelineItems: TimelineEvent[] = [];

  // constructor(private readonly dialog: MatDialog) {}

  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
  }

  openMondal(item: any){
    if(item.talk == '') return ;
    this.dialog.open(CardPresentationComponent, {
      data: item,
      autoFocus: false,
      panelClass: 'm-10',
      maxWidth: '800px',
      maxHeight: '900px',
    });
  }
}
