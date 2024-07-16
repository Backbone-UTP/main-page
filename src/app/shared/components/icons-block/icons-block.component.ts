import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-block',
  standalone: true,
  templateUrl: './icons-block.component.html',
  styleUrls: ['./icons-block.component.scss'],
})
export class IconsBlockComponent implements OnInit {
  @Input() heading: string = '';
  @Input() content: string = '';
  constructor() {}

  ngOnInit(): void {
    // Initialization code goes here
  }
}
