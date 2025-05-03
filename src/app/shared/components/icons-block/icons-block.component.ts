import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-block',
  standalone: true,
  templateUrl: './icons-block.component.html',
  styleUrls: ['./icons-block.component.scss'],
})
export class IconsBlockComponent implements OnInit {
  @Input() heading = '';
  @Input() content = '';
  constructor() {
    // do nothing
  }

  ngOnInit(): void {
    // do nothing
  }
}
