import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ThemeToggleComponent } from '../../../../../shared/components/theme-toogle/theme.toggle.component';
import { Header } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-sfd-header',
  standalone: true,
  imports: [NgFor, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class SFDHeaderComponent implements OnInit {
  @Input() navItems: Header[] = [];
  constructor() {}

  ngOnInit(): void {
    // Initialization code goes here
  }
}
