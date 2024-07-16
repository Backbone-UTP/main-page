// timeline.component.ts
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TimelineEvent } from 'src/app/shared/interfaces/features.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() timelineItems: TimelineEvent[] = [];

  constructor() {}

  ngOnInit(): void {}
}
