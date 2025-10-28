import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor() {
    window.location.href = 'https://www.instagram.com/backboneutp/';
  }
}
