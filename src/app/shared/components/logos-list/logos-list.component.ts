import { Component, Input, OnInit } from '@angular/core';
import { Logo } from '../../interfaces/logo.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-logos-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss'],
})
export class LogosListComponent implements OnInit {
  @Input() logos: Logo[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';
  constructor() {}

  ngOnInit(): void {
    // Initialization code goes here
  }
}
